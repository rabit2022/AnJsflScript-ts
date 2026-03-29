import {XMLSelector} from "../loader/XMLSelector";
import {BaseDialog} from "./BaseDialog";
import {BaseControl} from "../../Controls/Base/BaseControl";
import {BaseSettings} from "../../Controls/Base/BaseSettings";
import {ColumnsManager} from "../../Constants/ColumnsManager";
import {Label, Separator} from "../../Controls";
import {XMLBuilderr} from "../loader/XMLBuilderr";
import {DIALOG} from "../../Constants/DIALOG";
import {Copy} from "../../utils/copy/deepCopy";
import {getJsonFromDialog} from "../../utils/paser/getJson";
import {IFileHandler} from "./FileHandler";
import {XMLSaver} from "../loader/XMLSaver";


export class XULBuilder extends BaseDialog implements IFileHandler{
    private static xulid: number = 0;
    private title: string = 'xJSFL';
    private controls: BaseControl[] = [];

    constructor(id: string, title: string = 'xJSFL') {
        const copy = getJsonFromDialog();
        // this.json = copy;
        super(id, copy);

        const dialog = this.json.dialog;
        dialog["@id"] = id;
        this.setTitle(title);

        XULBuilder.xulid++;
    }

    addControl(control: BaseControl) {
        this.controls.push(control);
    }

    addControls(controls: BaseControl[]) {
        this.controls.push(...controls);
    }

    setSize(width: number, height: number) {
        const dialog = this.json.dialog;
        dialog["@width"] = width;
        dialog["@height"] = height;
    }

    setTitle(title: string) {
        const dialog = this.json.dialog;
        dialog["@title"] = " " + title;
        this.title = title;
    }

    setButtons(buttonName: string) {
        const dialog = this.json.dialog;
        dialog["@buttons"] = buttonName;
    }

    setProperties(props: Record<string, any>): this {
        // 直接解构出 [key, value]
        for (const [key, value] of Object.entries(props)) {
            switch (key) {
                case 'title':
                    this.setTitle(value);
                    break;
                default:
                    throw new Error(`Unknown property '${key}'`);
            }
        }
        return this;
    }

    setWidth() {
        // set column widths
        for (const control of this.controls) {
            if (["compound", "simple"].includes(control.CLASS)) {
                (control as BaseSettings).setLabelWidth(ColumnsManager.labelWidth);
                (control as BaseSettings).setControlWidth(ColumnsManager.controlWidth);
            } else if (control.CLASS === "spacer") {
                if (control.type === "label") {
                    (control as Label).setLabelWidth(ColumnsManager.labelWidth);
                }
            } else {

            }

        }
    }

    build() {
        // todo:add handlers to controls


        // set width
        this.setWidth()

        // add control json
        for (const control of this.controls) {
            this.add(control.toJSON() as { "row": any; });
        }

        // add xulid, so we can test for existance of dialog boxes in future
        this.json.dialog.property["@value"] = XULBuilder.xulid;


        // build
        const builder = new XMLBuilderr(this.json);
        const xml = builder.build();

        // replace separator control
        const separatedXml = Separator.replace(xml);
        return separatedXml;
    }

    /**
     * 获取 content.row 容器
     */
    private getContentContainer(): any[] {
        // const content = this.json.dialog.content.grid.rows.row;
        // return content;

        const selector = new XMLSelector(this.json, "$..row")
        return selector.select()[0];
    }

    /**
     * 添加控件
     */
    private add(controlJson: { "row": any }) {
        this.getContentContainer().push(controlJson.row);
        return this;
    }

    save(pathOrUri: string): void {
        const saver = new XMLSaver(pathOrUri);
        saver.save(this.toXMLString())
    }
}
