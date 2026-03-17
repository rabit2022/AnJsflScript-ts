/**
 * @file: ItemCollection.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/3/12 23:39
 * @project: AnJsflScript-ts
 * @description:
 */

import { Collection } from "../../base/Collection";
import { UI } from "../../base/UI";

import * as rename from "../operators/rename";

import { Context } from "@xjsfl/Context";
import { ElementCollection } from "../../ElementCollection";

export class ItemCollection extends Collection<LibraryItem> {
    private readonly library: Library;
    dom: FlashDocument;

    constructor(elements: LibraryItem[] | LibraryItem, dom?: FlashDocument) {
        super(elements instanceof Array ? elements : [elements]);

        this.dom = dom || UI.$dom;
        if (!this.dom) {
            throw new Error(
                "ElementCollection requires that a document be open before instantiation"
            );
        }

        this.library = this.dom.library;
    }

    get Library() {
        return this.library;
    }

    /* -------------------------------------------------- */
    /* delete */

    deleteItems(): this {
        const lib = this.Library;

        // this.reach(item => {
        this.forEach((item) => {
            lib.deleteItem(item.name);
        });

        return this;
    }

    /* -------------------------------------------------- */
    /* select */

    select(): this {
        const lib = this.Library;

        lib.selectNone();

        this.forEach((item) => {
            lib.selectItem(item.name, false, true);
        });

        this.reveal();

        return this;
    }

    /* -------------------------------------------------- */
    /* expand */

    expand(state = true, recurse?: boolean): this {
        const lib = this.Library;

        this.forEach((item) => {
            if (item.itemType === "folder") {
                lib.expandFolder(state, recurse, item.name);
            }
        });

        return this;
    }

    /* -------------------------------------------------- */
    /* reveal */

    /**
     * 通过展开包含的文件夹来显示库面板中的项目。
     */
    reveal(): this {
        const lib = this.Library;
        const cache = new Set<string>();

        this.forEach((item) => {
            let path = item.name;

            while (path.includes("/")) {
                path = path.replace(/\/[^\/]*$/, "");

                if (!cache.has(path)) {
                    lib.expandFolder(true, false, path);
                    cache.add(path);
                }
            }

            lib.expandFolder(true, false, path);
        });

        return this;
    }

    /* -------------------------------------------------- */
    /* rename */

    rename = rename.rename.bind(this);

    /* -------------------------------------------------- */
    /* move */

    move(path: string, replace: boolean = false, expand: boolean = true): this {
        const lib = this.Library;

        path = path.replace(/[:()\[\]*+]/g, "").replace(/(^\/+|\/+$)/g, "");

        if (!lib.itemExists(path)) {
            lib.addNewItem("folder", path);
        }

        this.forEach((item) => {
            lib.moveToFolder(path, item.name, replace);
        });

        // expand folders
        //TODO double check that expandFolder IS actually buggy
        if (expand) {
            /*
            while(path != '')
            {
                path = path.replace(/\/?[^\/]+$/, '');
                //this.getLibrary().expandFolder(true, true, path);
            }
            */
        }

        return this;
    }

    /* -------------------------------------------------- */
    /* exec */

    exec(
        callback: (item: LibraryItem, index: number, ...params: any[]) => void,
        params: any[] = []
    ): this {
        const lib = this.Library;

        this.each((item, index) => {
            lib.editItem(item.name);

            callback.apply(this, [item, index, ...params]);
        });

        return this;
    }

    /* -------------------------------------------------- */
    /* addToStage */

    addToStage(context: Context = Context.create(), x: number = 0, y: number = 0) {
        const elements: any[] = [];

        // context			= context || Context.create();
        context.goto();

        const types = new RegExp(
            "movie clip|graphic|button|bitmap|component|compiled clip|video|linked video|embedded video"
        );

        this.forEach((item) => {
            if (types.test(item.itemType)) {
                context.dom!.addItem({ x, y }, item);

                elements.push(context.dom!.selection[0]);
            }
        });

        return new ElementCollection(elements).select();
    }

    /* -------------------------------------------------- */
    /* sort */
    // sort(): this {
    //     Utils.sortOn(this.elements, 'name', true);
    //     return this;
    // }

    attr(prop: keyof LibraryItem, value: any) {
        super.attr(prop, value);
        return this.update();
    }

    /* -------------------------------------------------- */
    /* update */

    update(): this {
        const lib = this.Library;

        this.forEach((item) => {
            lib.updateItem(item.name);
        });

        return this;
    }

    /* -------------------------------------------------- */
    /* list */

    list(label?: string): this {
        console.log(label ?? "ItemCollection");
        this.forEach((item) => {
            console.log(item.name);
        });

        return this;
    }

    static toString() {
        return "[class ItemCollection]";
    }
}
