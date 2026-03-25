import {DIALOG} from "../../Constants/DIALOG";
import {Copy} from "../../utils/copy/deepCopy";
import {XMLSelector} from "../loader/XMLSelector";
import {XMLBuilderr} from "../loader/XMLBuilderr";
import {BaseDialog} from "./BaseDialog";


export class XULBuilder extends BaseDialog{
    private title: string;

    constructor(id: string, title: string) {
        super(id);

        const dialog = this.json.dialog;

        dialog["@id"] = id;
        dialog["@title"] = title;
        this.title = title;
    }

    /**
     * 获取 content.row 容器
     */
    getContentContainer(): any[] {
        // const content = this.json.dialog.content.grid.rows.row;
        // return content;

        const selector = new XMLSelector(this.json, "$..row")
        return selector.select()[0];
    }

    /**
     * 添加控件
     */
    add(controlJson: { "row": any }) {
        this.getContentContainer().push(controlJson.row);
        return this;
    }


    setSize(width: number, height: number) {
        const dialog = this.json.dialog;
        dialog["@width"] = width;
        dialog["@height"] = height;
    }

    setTitle(title: string) {
        const dialog = this.json.dialog;
        dialog["@title"] = " "+title;
        this.title			= title;
    }
    setButtons(buttonName: string) {
        const dialog = this.json.dialog;
        dialog["@buttons"] = buttonName;
    }
}
