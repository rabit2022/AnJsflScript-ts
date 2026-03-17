
// ------------------------------------------------------------------------------------------------------------------------
//
//  ██████       ██              ██
//  ██           ██              ██
//  ██     █████ ██ █████ █████ █████ █████ ████ █████
//  ██████ ██ ██ ██ ██ ██ ██     ██   ██ ██ ██   ██
//      ██ █████ ██ █████ ██     ██   ██ ██ ██   █████
//      ██ ██    ██ ██    ██     ██   ██ ██ ██      ██
//  ██████ █████ ██ █████ █████  ████ █████ ██   █████
//
// ------------------------------------------------------------------------------------------------------------------------
// Selectors

import {Scope, ScopeFunc, ScopeOutName, scopeTypeMap} from "./Selectors.types";

import * as _ from "lodash";
import {parseExpression} from "./expression/parser";
import {Selector} from "../Selector/Selector";
import {
    ComboKeys,
    CoreFindKeys, CorePseudooKeys,
    ELEMENTFindKeys, ELEMENTPseudooKeys,
    ITEMFindKeys,
    ITEMPseudoKeys,
    MatchResult, PseudoType
} from "./utils/matchResult.types";
import {Core} from "./core/Core";
import {processAttributeValue} from "./utils/processAttributeValue";
import {config} from "../Debug";
import {Cases} from "./Cases";
import {ITEM_filter_type} from "./Cases/item.types";
import {ELEMENT_filter_type} from "./Cases/element.types";



export class Selectors {
    static select<T extends FlashElement | LibraryItem>(
        expression: string,
        items: T[],
        scope: Scope
    ): T[] {
        if (items.length === 0) {
            return items;
        }

        const key = scope.constructor.name as keyof typeof scopeTypeMap;

        const type:ScopeOutName = scopeTypeMap[key];

        if (!type) {
            throw new TypeError(`Invalid scope "${scope}" supplied to Selector.select()`);
        }

        // 1. *
        if (expression === "*") {
            return items;
        }

        // 2. ":first" ":last" ":even" ":odd" ":nth"
        // ":nth(3)"
        // ":bitmap:first"
        // ":symbol[name*=icon]:last"
        // ":folder > :even"
        if (
            type === "Item" &&
            /:(first|last|even|odd|nth)\b/.test(expression)
        ) {
            // items.sort((a, b) =>
            //     String(a.name).localeCompare(String(b.name), undefined, {
            //         sensitivity: "base"
            //     })
            // );

            items = _.sortBy(items, item => String(item.name).toLowerCase());
        }

        // 3.分割多个表达式
        // ":not(body[attr=hello]),hello,[dave=1,ian=2]"
        //     [ ':not(body[attr=hello])', 'hello', '[dave=1,ian=2]' ]
        const expressions = parseExpression(expression);

        let results: T[] = [];

        for (const expr of expressions) {

            const selectors = this.parse(expr, type);


            const _results = Selectors.test(selectors, items);

            results = results.concat(_results);
        }

        // return Utils.toUniqueArray(results);
        // return [...new Set(results)];
        return Array.from(new Set(results));
    }

    static register(
        pattern: string,
        callback: Function,
        type: ScopeFunc
    ): typeof Selectors {

        const matches = String(pattern).match(/([:\[])(\w+)/);

        if (!matches) {
            throw new Error(`Invalid pattern "${pattern}" supplied`);
        }

        if (!/^(item|element)$/i.test(type)) {
            throw new Error(`Invalid type "${type}" supplied`);
        }

        const selector = matches[2];

        let group: "pseudo" | "custom" = "pseudo";
        // :pseudo selector
        if (matches[1] === ":") {
            group = "pseudo";
        }
        // [attribute] selector
        else if(matches[1] == '['){
            group = "custom";
        }

        // type = "item" | "element"
        // group = "pseudo" | "custom"
        // Cases["item"]["pseudo"],Cases.item.custom, Cases.element.pseudo,Cases.element.custom,
        (Cases[type][group] as any)[selector] = callback;

        return Selectors;
    }

    static parse(expression: string, type: ScopeOutName): Selector[] {

        // --------------------------------------------------------------------------------
        // setup

        // chunker
        /*
            #  type             example
            -------------------------------------------------
            1: combo			:not(selector)
               2: type			:not
               3: selector		:bitmap
            4: name				this is a name
            5: path				/this is/a path
            6: Class			.Class
            7: package			.com.domain.package.Class
            8: pseudo			:type
            9: attribute		[attribute=value]
               10: name			attribute
               11: operand		=
               12: value		value
        */

        const chunker = /(:([\-\w]+)\((.+)\))|([A-Za-z0-9_*][^:\[]*)|\/([\-\w\s\/_*{|}]+)|\.([*A-Z][\w*]+)|\.([a-z][\w.*]+)|:([a-z]\w+)|\[(([\w\.]+)([\^$*!=<>]{1,2})?(.+?)?)\]/g;
                        //  1 2          3       4                        5                    6                7               8            9 10      11                12

        /*
        (:([\-\w]+)\((.+)\))           |  // 1. 伪类/函数组合 :name(args)
        ([A-Za-z0-9_*][^:\[]*)         |  // 2. 普通名称/ID (非路径、非类、非属性)
        \/([\-\w\s\/_*{|}]+)           |  // 3. 路径 /path/to/something
        \.([*A-Z][\w*]+)               |  // 4. 类名/包名 (大写开头或星号) .MyClass
        \.([a-z][\w.*]+)               |  // 5. 包名/命名空间 (小写开头) .com.domain
        :([a-z]\w+)                    |  // 6. 简单伪类 :hover
        \[(([\w\.]+)([\^$*!=<>]{1,2})?(.+?)?)\]  // 7. 属性选择器 [attr=val]
         */

        const selectors: Selector[] = [];

        let exec: RegExpExecArray | null;

        // core
        const object = Cases[type.toLowerCase() as ScopeFunc];
        const core = Core;

        while ((exec = chunker.exec(expression))) {
            const result:MatchResult = {
                full: exec[0],          // 完整匹配
                combo: exec[1],         // :not(...)
                combo_type: exec[2] as ComboKeys,          // not
                combo_selector: exec[3],      // .hidden
                name: exec[4],          // div
                path: exec[5],          // /user/xx
                Class: exec[6],         // .Button
                package: exec[7],       // .com.xxx
                pseudo: exec[8] as PseudoType,        // :hover
                attribute: exec[9],     // [type=text]
                attribute_name: exec[10],     // type
                attribute_operator: exec[11],     // =
                attribute_value: exec[12],        // text
            };

            const selector = new Selector(result.full);

            // 1: combo ":not(:bitmap)"
            if (result.combo) {
                selector.type = "combo";
                selector.name = result.combo_type;
                selector.method = core.combo[result.combo_type];
                selector.params = [null, result.combo_selector, type];
            }
            // 4: name "Item_03"
            else if (result.name) {
                selector.type = "filter";
                selector.name = "name";
                selector.method = object.filter.name;
                selector.params = [null, Selector.makeRX(result.name, selector),selector.range];
            }
            // 5: path "/path/to/item" (can only be Library or Stage)
            else if (result.path) {

                selector.type = "filter";
                selector.name = "path";
                selector.method = object.filter.path;
                selector.params = [
                    null,
                    Selector.makeRX(result.path.replace(/(^\/+|\/+$)/g, ""), selector),
                    selector.range
                ];
            }
            // 6: Class ".Class"
            else if(result.Class)
            {
                selector.type	= 'filter';
                selector.name	= 'Class';
                selector.method	= object.filter.Class;
                selector.params	= [null, Selector.makeRX(result.Class, selector)];
            }

            // 7: package ".com.domain.package.Class"
            else if(result.package)
            {
                selector.type	= 'filter';
                selector.name	= 'Package';
                selector.method	= object.filter.Package;
                selector.params	= [null, Selector.makeRX(result.package, selector)];
            }
            // 8: pseudo ":type"
            else if (result.pseudo) {

                const name = result.pseudo;

                selector.name = name;
                let method;

                // type
                if(/instance|symbol|bitmap|sound|embeddedvideo|linkedvideo|video|compiledclip|text|folder|static|dynamic|input|primitive|group|shape|movieclip|graphic|button/.test(name))
                {
                    (name as ITEM_filter_type|ELEMENT_filter_type)

                    selector.type	= 'type';
                    selector.params	= [null, name];
                    method			= object.filter.type;
                }

                // find
                else if(/selected|children|descendants|parent|first|last|even|odd|random/.test(name))
                {
                    (name as ITEMFindKeys|ELEMENTFindKeys|CoreFindKeys)


                    selector.type	= 'find';
                    selector.params	= [null];


                    // ITEM.find:parent|children|descendants|selected
                    // ELEMENT.find:selected
                    method = (object.find as any)[name as ITEMFindKeys|ELEMENTFindKeys]
                        // FindKeys："first" | "last" | "even" | "odd" | "random
                        ||  core.find[name as CoreFindKeys];
                }

                else
                {
                    (name as ITEMPseudoKeys|ELEMENTPseudooKeys|CorePseudooKeys)

                    selector.type	= 'pseudo';
                    selector.params	= [null, name];
                    // ITEM.pseudo:exported|timeline|empty|animated|keyframed|scripted|audible
                    // ELEMENT.pseudo:empty|animated|keyframed|scripted|scriptable|audible|exported|filtered|tinted|transparent|component
                    // custom, any custom values which need to have been registered
                    method			= (object.pseudo as any)[name]  || (core.pseudo as any)[name];
                }

                // assign
                selector.name	= name;
                selector.method	= method;
            }

            // 9: attribute "[attribute=value]"
            else if(result.attribute)
            {
                // selector properties
                selector.type	= 'filter';
                selector.name	= 'attribute';
                selector.method	= core.filter.attribute;

                // attribute components
                const attName = result.attribute_name;
                const attOperand = result.attribute_operator;
                const attValue = processAttributeValue(result.attribute_value, selector);


                // assign
                selector.params	= [null, attName, attOperand, attValue, selector.range, object.custom];
            }
            else
            {
                throw new TypeError(`TypeError in Selectors.parse(): Unrecognised pattern "${selector.pattern}"`);
            }

            if (!selector.method) {
                throw new TypeError(
                    `Unrecognised selector "${selector.pattern}"  in ${type}  Selector function`
                );
            }

            selectors.push(selector);
        }

        return selectors;
    }

    static test<T>(
        selectors: Selector[],
        items: T[]
    ): T[] {

        if (selectors.length === 0) {
            return [];
        }

        if (config.DEBUG) {
            console.log("Selectors")
            // @ts-ignore
            console.inspect(selectors, "Selectors");
        }

        for (const selector of selectors) {

            const temp: any[] = [];

            // find,combo
            if (selector.type === "find" || selector.type === "combo") {
                const result = selector.filter(items);
                temp.push(...result);
            } else {

                for (const item of items) {
                    const state = selector.test(item);

                    if (state) {
                        temp.push(item);
                    }
                }
            }

            items = temp;

            if (items.length === 0) {
                break;
            }
        }

        return items;
    }

    static toString(): string {
        return "[class Selectors]";
    }
}

