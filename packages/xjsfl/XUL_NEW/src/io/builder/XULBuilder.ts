import {XMLBuilder} from "fast-xml-parser";
import {DIALOG} from "../../Constants/DIALOG";
import {Copy} from "../../utils/copy/deepCopy";
import {XMLSelector} from "../loader/XMLSelector";
import {XMLBuild} from "../loader/XMLBuild";


export class XULBuilder {
    private readonly json;

    constructor(id: string, title: string) {
        this.json = Copy.deepCopy(DIALOG);

        const dialog = this.json.dialog;

        dialog["@id"] = id;
        dialog["@title"] = title;
    }

    /**
     * 获取 content.row 容器
     */
    getContentContainer(): any[] {
        // const content = this.json.dialog.content.grid.rows.row;
        // return content;

        const selector = new XMLSelector(this.json, "$..row")
        // console.log(selector.select());
        return selector.select()[0];
    }

    /**
     * 添加控件
     */
    add(controlJson: { "row": any }) {
        this.getContentContainer().push(controlJson.row);
        return this;
    }

    /**
     * 输出 JSON
     */
    toJSON() {
        return this.json;
    }

    /**
     * 输出 XML
     */
    toXMLString(): string {
        const builder = new XMLBuild(this.json);
        return builder.build();
    }
}
