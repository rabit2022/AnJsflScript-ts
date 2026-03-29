import {compoundControl} from "../../Constants/Templates.types";
import {Attrs} from "./SimpleControls.types";
import {ListitemAttributes, SelectedItem, ValuesType} from "../CompoundControls/types/Listbox.types";
import {JSONPath} from "jsonpath-plus";
import {ChildrenMap} from "./CompoundControls.types";
import {CLASS_TYPE} from "./BaseControl.types";

import * as _ from "lodash";
import {BaseSettings} from "./BaseSettings";
import {IdGenerator} from "../../utils/id/uniqueID";
import {getJsonFromTemplate} from "../../utils/paser/getJson";

export class CompoundControls extends BaseSettings {

    protected CLASS_TYPE: CLASS_TYPE = "compound";

    constructor(type: compoundControl, id: string | null, label: string|null, attributes: Attrs = {}, values: ValuesType = {}) {
        label = label || type;
        id = id || IdGenerator.generate(label);

        let json = getJsonFromTemplate(type);
        super(type, id, json);

        this._type = type;

        this.addChildren(id, values);
        this.setAttributes(type, id, label, attributes);
    }


    /**
     * 获取 content.row 容器
     */
    getChildrenContainer(): any[] {
        // const row = this.json.row;
        // return row.listbox.listitem;
        let children = ChildrenMap[this._type as compoundControl];
        return _.get(this.json, children);
    }

    addChildren(id: string, values: ValuesType = {}, selected?: string) {
        // const listitemTemplate =  TEMPLATES["listitem"];
        // const copy = Copy.deepCopy(listitemTemplate);

        const container = this.getChildrenContainer();

        Object.entries(values).forEach(([name, value], i) => {
            const item: ListitemAttributes = {
                "@value": "",
                "@label": "",
            };

            let subId: string;

            // ✅ 情况1：{ label, value }
            if (typeof value === "object" && value !== null && "label" in value) {
                item["@value"] = value.value;
                item["@label"] = value.label;
                subId = value.value;
            }

            // ✅ 情况2：数组
            else if (Array.isArray(values)) {
                item["@value"] = value;
                item["@label"] = value;
                subId = value as string;
            }

            // ✅ 情况3：普通对象
            else {
                item["@value"] = value as string;
                item["@label"] = name;
                subId = value as string;
            }

            // ✅ id
            if (id) {
                item["@id"] = `${id}[${subId}]`;
            }

            // ✅ selected
            if ((selected === undefined && i === 0) || value === selected) {
                item["@selected"] = true;
            } else {
                delete item["@selected"];
            }

            // items.push(item);
            container.push(item);
        });
    }


    setSettings() {
        const selected: SelectedItem[] = JSONPath({
            path: "$..*[?(@['@selected'] == true || @['@selected'] == 'true')]",
            json: this.json,
            resultType: "value",
        });
        if (selected.length > 0) {
            let onlyOne = selected[0];
            this.settings[this.id] = onlyOne["@value"];
        }
    }
}