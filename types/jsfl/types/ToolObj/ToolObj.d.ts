// toolObj.d.ts

/**
 * A ToolObj object represents an individual tool in the Tools panel.
 * To access a ToolObj object, use properties of the Tools object:
 * either the tools.toolObjs array or tools.activeTool.
 */
interface ToolObj {
    /**
     * Read-only property; an integer that specifies the depth of the tool in the pop-up menu in the Tools panel.
     * This property is used only when you create extensible tools.
     *
     * @example
     * fl.tools.activeTool.depth = 1;
     */
    readonly depth: number;

    /**
     * Read-only property; an integer with a value of -1.
     * This property is used only when you create extensible tools.
     * An iconID value of -1 means that Flash will not try find an icon for the tool.
     * Instead, the script for the tool should specify the icon to display in the Tools panel; see toolObj.setIcon().
     *
     * @example
     * var toolIconID = fl.tools.activeTool.iconID
     */
    readonly iconID: number;

    /**
     * Read-only property; an integer that specifies the position of the tool in the Tools panel.
     * This property is used only when you create extensible tools.
     *
     * @example
     * myToolPos = fl.tools.activeTool.position;fl.trace(myToolPos);
     */
    readonly position: number;

    /**
     * Enables or disables the specified control in a Property inspector.
     * Used only when creating extensible tools.
     *
     * @param control A string that specifies the name of the control to enable or disable.
     * Legal values depend on the Property inspector invoked by this tool; see toolObj.setPI().
     * A shape Property inspector has the following controls: "Stroke", "fill"
     * A text Property inspector has the following controls: "type", "font", "pointsize", "color", "bold", "italic",
     * "direction", "alignLeft", "alignCenter", "alignRight", "alignJustify", "spacing", "position", "autoKern", "small",
     * "rotation", "format", "lineType", "selectable", "html", "border", "deviceFonts", "varEdit", "options", "link",
     * "maxChars", "target"
     * A movie Property inspector has the following controls: "size", "publish", "background", "framerate", "player", "profile"
     * @param bEnable A Boolean value that determines whether to enable (true) or disable (false) the control.
     * @returns Nothing.
     *
     * @example
     * theTool.enablePIControl("stroke",false);
     */
    enablePIControl(control: string, bEnable: boolean): void;

    /**
     * Identifies a PNG file to use as a tool icon in the Flash Tools panel.
     * This method is used only when you create extensible tools.
     *
     * @param file A string that specifies the name of the PNG file to use as the icon.
     * The PNG file must be placed in the same folder as the JSFL file.
     * @returns Nothing.
     *
     * @example
     * theTool = fl.tools.activeTool;theTool.setIcon("PolyStar.png");
     */
    setIcon(file: string): void;

    /**
     * Sets the string that appears in the pop-up menu as the name for the tool.
     * This method is used only when you create extensible tools.
     *
     * @param menuStr A string that specifies the name that appears in the pop-up menu as the name for the tool.
     * @returns Nothing.
     *
     * @example
     * theTool = fl.tools.activeTool;theTool.setMenuString("PolyStar Tool");
     */
    setMenuString(menuStr: string): void;

    /**
     * Associates an XML file with the tool.
     * The file specifies the options to appear in a modal panel that is invoked by an Options button in the Property inspector.
     * You would usually use this method in the configureTool() function inside your JSFL file.
     *
     * @param xmlFile A string that specifies the name of the XML file that has the description of the tool’s options.
     * The XML file must be placed in the same folder as the JSFL file.
     * @returns Nothing.
     *
     * @example
     * theTool = fl.tools.activeTool;theTool.setOptionsFile("PolyStar.xml");
     */
    setOptionsFile(xmlFile: string): void;

    /**
     * Sets a particular Property inspector to be used when the tool is activated.
     * This method is used only when you create extensible tools.
     *
     * @param pi A string that specifies the Property inspector to invoke for this tool.
     * Acceptable values are "shape" (the default), "text", and "movie".
     * @returns Nothing.
     *
     * @example
     * theTool = fl.tools.activeTool;theTool.setPI("shape");
     */
    setPI(pi: "shape" | "text" | "movie"): void;

    /**
     * Assigns a name to the tool for the configuration of the Tools panel.
     * This method is used only when you create extensible tools.
     * The name is used only by the XML layout file that Flash reads to construct the Tools panel.
     * The name does not appear in the Flash user interface.
     *
     * @param name A string that specifies the name of the tool.
     * @returns Nothing.
     *
     * @example
     * theTool = fl.tools.activeTool;theTool.setToolName("polystar");
     */
    setToolName(name: string): void;

    /**
     * Sets the tooltip that appears when the mouse is held over the tool icon.
     * This method is used only when you create extensible tools.
     *
     * @param toolTip A string that specifies the tooltip to use for the tool.
     * @returns Nothing.
     *
     * @example
     * theTool = fl.tools.activeTool;theTool.setToolTip("PolyStar Tool");
     */
    setToolTip(toolTip: string): void;

    /**
     * Shows or hides a control in the Property inspector.
     * This method is used only when you create extensible tools.
     * Valid values depend on the Property inspector invoked by this tool (see toolObj.setPI()).
     * A shape Property inspector has the following controls: "Stroke", "fill"
     * A text Property inspector has the following controls: "type", "font", "pointsize", "color", "bold", "italic",
     * "direction", "alignLeft", "alignCenter", "alignRight", "alignJustify", "spacing", "position", "autoKern", "small",
     * "rotation", "format", "lineType", "selectable", "html", "border", "deviceFonts", "varEdit", "options", "link",
     * "maxChars", "target"
     * The movie Property inspector has the following controls: "size", "publish", "background", "framerate", "player", "profile"
     *
     * @param control A string that specifies the name of the control to show or hide.
     * @param bShow A Boolean value that determines whether to show (true) or hide (false) the specified control.
     * @returns Nothing.
     *
     * @example
     * fl.tools.activeTool.showPIControl("fill", false);
     */
    showPIControl(control: string, bShow: boolean): void;

    /**
     * Called in the configureTool() method of an extensible tool’s JavaScript file to indicate that the free transform handles should appear when the tool is active.
     * This method is used only when you create extensible tools.
     *
     * @param bShow A Boolean value that determines whether to show (true) or hide (false) the free transform handles for the current tool.
     * @returns Nothing.
     *
     * @example
     * See configureTool().
     */
    showTransformHandles(bShow: boolean): void;
}