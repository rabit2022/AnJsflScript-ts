// textAttrs.d.ts

/**
 * The TextAttrs object contains all the properties of text that can be applied to a subselection.
 * This object is a property of the TextRun object (textRun.textAttrs).
 */
interface TextAttrs {
    /**
     * A Boolean value that specifies that Flash should draw the text using a method optimized for increasing the legibility of small text.
     *
     * @example
     * fl.getDocumentDOM().setElementTextAttr('aliasText', true);
     */
    aliasText: boolean;

    /**
     * A string that specifies paragraph justification. Acceptable values are "left", "center", "right", and "justify".
     *
     * @example
     * fl.getDocumentDOM().setTextSelection(0, 3); fl.getDocumentDOM().setElementTextAttr("alignment", "justify");
     */
    alignment: "left" | "center" | "right" | "justify";

    /**
     * A Boolean value that determines whether Flash uses (true) or ignores (false) pair kerning information in the font(s) to kern the text.
     *
     * @example
     * fl.getDocumentDOM().setTextSelection(3, 6); fl.getDocumentDOM().setElementTextAttr('autoKern', true);
     */
    autoKern: boolean;

    /**
     * A Boolean value. A value of true causes text to appear with the bold version of the font.
     *
     * @example
     * fl.getDocumentDOM().setTextSelection(0, 1); fl.getDocumentDOM().setElementTextAttr('bold', true);
     */
    bold: boolean;

    /**
     * A string that determines the baseline for the text. Acceptable values are "normal", "subscript", and "superscript". This property applies only to static text.
     *
     * @example
     * fl.getDocumentDOM().setTextSelection(2, 6); fl.getDocumentDOM().setElementTextAttr("characterPosition", "subscript");
     */
    characterPosition: "normal" | "subscript" | "superscript";

    /**
     * Deprecated in favor of letterSpacing. An integer that represents the space between characters. Acceptable values are -60 through 60.
     * This property applies only to static text; it generates a warning if used with other text types.
     *
     * @deprecated Use letterSpacing instead.
     * @example
     * fl.getDocumentDOM().setElementTextAttr("characterSpacing", 10);
     */
    characterSpacing: number;

    /**
     * A string that represents the name of the font, such as "Arial".
     *
     * @example
     * fl.getDocumentDOM().selection[0].setTextAttr("face", "Arial", 2, 8);
     */
    face: string;

    /**
     * A string, hexadecimal value, or integer that represents the fill color.
     * Formats:
     * - A string in the format "#RRGGBB" or "#RRGGBBAA"
     * - A hexadecimal number in the format 0xRRGGBB
     * - An integer that represents the decimal equivalent of a hexadecimal number
     *
     * @example
     * fl.getDocumentDOM().selection[0].setTextAttr("fillColor", 0xff0000, 2, 8);
     */
    fillColor: string | number;

    /**
     * An integer that specifies paragraph indentation. Acceptable values are -720 through 720.
     *
     * @example
     * fl.getDocumentDOM().selection[0].setTextAttr("indent", 100, 2, 8);
     */
    indent: number;

    /**
     * A Boolean value. A value of true causes text to appear with the italic version of the font.
     *
     * @example
     * fl.getDocumentDOM().selection[0].setTextAttr("italic", true);
     */
    italic: boolean;

    /**
     * An integer that specifies the paragraph’s left margin. Acceptable values are 0 through 720.
     *
     * @example
     * fl.getDocumentDOM().selection[0].setTextAttr("leftMargin", 100, 2, 8);
     */
    leftMargin: number;

    /**
     * An integer that represents the space between characters. Acceptable values are -60 through 60.
     * This property applies only to static text; it generates a warning if used with other text types.
     *
     * @example
     * fl.getDocumentDOM().setTextSelection(0, 10);fl.getDocumentDOM().setElementTextAttr("letterSpacing", 60);
     */
    letterSpacing: number;

    /**
     * An integer that specifies the line spacing (leading) of the paragraph. Acceptable values are -360 through 720.
     *
     * @example
     * fl.getDocumentDOM().selection[0].setTextAttr("lineSpacing", 100);
     */
    lineSpacing: number;

    /**
     * An integer that specifies the paragraph’s right margin. Acceptable values are 0 through 720.
     *
     * @example
     * fl.getDocumentDOM().selection[0].setTextAttr("rightMargin", 100, 2, 8);
     */
    rightMargin: number;

    /**
     * A Boolean value. A value of true causes Flash to rotate the characters of the text 90°. The default value is false.
     * This property applies only to static text with a vertical orientation; it generates a warning if used with other text types.
     *
     * @example
     * fl.getDocumentDOM().setElementTextAttr("rotation", true);
     */
    rotation: boolean;

    /**
     * An integer that specifies the size of the font.
     *
     * @example
     * fl.outputPanel.trace(fl.getDocumentDOM().selection[0].getTextAttr("size", 2));
     */
    size: number;

    /**
     * A string that represents the target property of the text field. This property works only with static text.
     *
     * @example
     * fl.outputPanel.trace(fl.getDocumentDOM().getTimeline().layers[0].frames[0].elements[0].getTextAttr("target"));
     */
    target: string;

    /**
     * A string that represents the URL property of the text field. This property works only with static text.
     *
     * @example
     * fl.getDocumentDOM().setElementTextAttr("url", "http://www.adobe.com");
     */
    url: string;
}