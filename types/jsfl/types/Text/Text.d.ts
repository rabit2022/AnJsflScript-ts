/**
 * Represents a single text item in a Flash document.
 * All properties of the text pertain to the entire text block.
 * To set properties of a text run within the text field, see the TextAttrs object.
 * To change properties of a selection within a text field, use document.setElementTextAttr() or current selection.
 * To set generic properties of the selected text field, use document.setElementProperty().
 *
 * @example
 * // Set x value of selected text field's registration point to 50
 * fl.getDocumentDOM().setElementProperty("x", 50);
 */
interface Text extends Element {
    // --- Properties ---

    /**
     * A string equivalent to the Name field in the Accessibility panel.
     * Cannot be used with dynamic text.
     *
     * @example
     * var theName = fl.getDocumentDOM().selection[0].accName;
     * fl.getDocumentDOM().selection[0].accName = "Home Button";
     */
    accName: string;

    /**
     * A float value specifying anti-aliasing sharpness of the text.
     * Available only if fontRenderingMode is "customThicknessSharpness".
     * Higher values = sharper text. 0 = normal.
     *
     * @example
     * See text.fontRenderingMode
     */
    antiAliasSharpness: number;

    /**
     * A float value specifying anti-aliasing thickness of the text.
     * Available only if fontRenderingMode is "customThicknessSharpness".
     * Higher values = thicker text. 0 = normal.
     *
     * @example
     * See text.fontRenderingMode
     */
    antiAliasThickness: number;

    /**
     * Boolean controlling expansion of bounding box:
     * - Static text: expands width
     * - Dynamic/Input: expands width and height
     *
     * @example
     * fl.getDocumentDOM().selection[0].autoExpand = true;
     */
    autoExpand: boolean;

    /**
     * Boolean controlling whether Flash shows a border around dynamic or input text.
     *
     * @example
     * fl.getDocumentDOM().selection[0].border = true;
     */
    border: boolean;

    /**
     * A string equivalent to the Description field in the Accessibility panel.
     * Read by screen readers.
     *
     * @example
     * var desc = fl.getDocumentDOM().selection[0].description;
     * fl.getDocumentDOM().selection[0].description = "Enter your name here";
     */
    description: string;

    /**
     * A string specifying characters to embed (Classic text only).
     * Equivalent to Character Embedding dialog.
     * Only works with dynamic or input text; warns otherwise.
     * Note: From Flash CS5+, use fontItem.embeddedCharacters instead.
     *
     * @example
     * fl.getDocumentDOM().selection[0].embeddedCharacters = "abc";
     */
    embeddedCharacters: string;

    /**
     * A string of delimited integers corresponding to Character Embedding dialog options.
     * Only for dynamic/input text; ignored for static.
     * Note: From Flash CS5+, use fontItem.embedRanges instead.
     *
     * @example
     * fl.getDocumentDOM().selection[0].embedRanges = "1|3|7";
     * fl.getDocumentDOM().selection[0].embedRanges = "";
     */
    embedRanges: string;

    /**
     * Boolean enabling embedding of variant glyphs.
     * Only for dynamic/input text; ignored for static.
     * Default: false.
     * Note: From Flash CS5+, this property has no effect; use fontItem.embedVariantGlyphs.
     *
     * @example
     * fl.getDocumentDOM().selection[0].embedVariantGlyphs = true;
     */
    embedVariantGlyphs: boolean;

    /**
     * Array of filters applied to the text element.
     * Modify by retrieving array, changing properties, then reassigning.
     *
     * @example
     * var filterArray = fl.getDocumentDOM().getTimeline().layers[0].frames[0].elements[0].filters;
     * if (filterArray[0].name === 'glowFilter') {
     *   filterArray[0].blurX = 100;
     * }
     * fl.getDocumentDOM().getTimeline().layers[0].frames[0].elements[0].filters = filterArray;
     */
    filters: any[];

    /**
     * Specifies rendering mode for text.
     * Values:
     * - "device": device fonts
     * - "bitmap": aliased as bitmap
     * - "standard": standard anti-aliasing (Flash MX 2004)
     * - "advanced": advanced anti-aliasing (Flash 8+)
     * - "customThicknessSharpness": use antiAliasSharpness/antiAliasThickness
     *
     * @example
     * fl.getDocumentDOM().setElementProperty("fontRenderingMode", "customThicknessSharpness");
     * fl.getDocumentDOM().setElementProperty("antiAliasSharpness", 400);
     * fl.getDocumentDOM().setElementProperty("antiAliasThickness", -200);
     */
    fontRenderingMode: "device" | "bitmap" | "standard" | "advanced" | "customThicknessSharpness";

    /**
     * Read-only integer: number of characters in the Text object.
     *
     * @example
     * var textLength = fl.getDocumentDOM().selection[0].length;
     */
    readonly length: number;

    /**
     * Sets line type.
     * Acceptable values: "single line", "multiline", "multiline no wrap", "password"
     * - Works only with dynamic or input text (warns for static)
     * - "password" only for input text
     *
     * @example
     * fl.getDocumentDOM().selection[0].lineType = "multiline no wrap";
     */
    lineType: "single line" | "multiline" | "multiline no wrap" | "password";

    /**
     * Maximum characters user can enter.
     * Only for input text; warns otherwise.
     *
     * @example
     * fl.getDocumentDOM().selection[0].maxCharacters = 30;
     */
    maxCharacters: number;

    /**
     * Orientation of the text field.
     * Acceptable values: "horizontal", "vertical left to right", "vertical right to left"
     * Only for static text; warns otherwise.
     *
     * @example
     * fl.getDocumentDOM().selection[0].orientation = "vertical right to left";
     */
    orientation: "horizontal" | "vertical left to right" | "vertical right to left";

    /**
     * Boolean: draws text as HTML and interprets embedded HTML tags.
     * Only for dynamic or input text; warns otherwise.
     *
     * @example
     * fl.getDocumentDOM().selection[0].renderAsHTML = true;
     */
    renderAsHTML: boolean;

    /**
     * Boolean: whether text can be scrolled.
     * Only for dynamic or input text; warns for static.
     *
     * @example
     * fl.getDocumentDOM().selection[0].scrollable = false;
     */
    scrollable: boolean;

    /**
     * Boolean: whether text can be selected.
     * Input text is always selectable (setting false warns).
     *
     * @example
     * fl.getDocumentDOM().selection[0].selectable = true;
     */
    selectable: boolean;

    /**
     * Zero-based integer: offset of start of text subselection.
     * Use with selectionEnd to select range (end not included).
     * If > selectionEnd, both set equal → no selection.
     *
     * @example
     * fl.getDocumentDOM().selection[0].selectionStart = 5;
     * // Select "Barbara" and format bold/green
     * fl.getDocumentDOM().selection[0].selectionStart = 11;
     * fl.getDocumentDOM().selection[0].selectionEnd = 18;
     * var s = fl.getDocumentDOM().selection[0].selectionStart;
     * var e = fl.getDocumentDOM().selection[0].selectionEnd;
     * fl.getDocumentDOM().setElementTextAttr('bold', true, s, e);
     * fl.getDocumentDOM().setElementTextAttr("fillColor", "#00ff00", s, e);
     */
    selectionStart: number;

    /**
     * Zero-based integer: offset of end of text subselection.
     * See selectionStart for details.
     */
    selectionEnd: number;

    /**
     * String equivalent to Shortcut field in Accessibility panel.
     * Read by screen reader. Cannot be used with dynamic text.
     *
     * @example
     * var theShortcut = fl.getDocumentDOM().selection[0].shortcut;
     * fl.trace(theShortcut);
     * fl.getDocumentDOM().selection[0].shortcut = "Ctrl+i";
     */
    shortcut: string;

    /**
     * Boolean: specifies if object is accessible.
     * Equivalent to inverse of "Make Object Accessible" in Accessibility panel.
     * true → not accessible; false → accessible.
     *
     * @example
     * var isSilent = fl.getDocumentDOM().selection[0].silent; // false = accessible
     * fl.getDocumentDOM().selection[0].silent = false; // make accessible
     */
    silent: boolean;

    /**
     * Integer: Tab Index from Accessibility panel.
     * Determines tab order when user presses Tab key.
     *
     * @example
     * var theTabIndex = fl.getDocumentDOM().selection[0].tabIndex;
     * fl.getDocumentDOM().selection[0].tabIndex = 1;
     */
    tabIndex: number;

    /**
     * Read-only array of TextRun objects.
     *
     * @example
     * var myTextRuns = fl.getDocumentDOM().selection[0].textRuns;
     */
    readonly textRuns: TextRun[];

    /**
     * Type of text field.
     * Acceptable values: "static", "dynamic", "input"
     *
     * @example
     * fl.getDocumentDOM().selection[0].textType = "input";
     */
    textType: "static" | "dynamic" | "input";

    /**
     * Boolean: draws text using device fonts if true.
     *
     * @example
     * fl.getDocumentDOM().selection[0].useDeviceFonts = true;
     */
    useDeviceFonts: boolean;

    /**
     * String: name of variable associated with Text object.
     * Only works with dynamic or input text (ActionScript 1.0/2.0).
     * Warns if used with other types.
     *
     * @example
     * fl.getDocumentDOM().selection[0].variableName = "firstName";
     */
    variableName: string;

    // --- Methods ---

    /**
     * Retrieves specified attribute for text in optional range.
     * If attribute inconsistent in range → returns undefined.
     * Omit params → entire text; startIndex only → single char; both → [start, end)
     *
     * @param attrName Name of TextAttrs property
     * @param startIndex Optional zero-based start index
     * @param endIndex Optional zero-based end index (not included)
     * @returns Value of attribute or undefined
     *
     * @example
     * var TheTextSize = fl.getDocumentDOM().selection[0].getTextAttr("size");
     * var TheFill = fl.getDocumentDOM().selection[0].getTextAttr("fillColor");
     * var Char3 = fl.getDocumentDOM().selection[0].getTextAttr("size", 2);
     * fl.getDocumentDOM().selection[0].getTextAttr("fillColor", 2, 8);
     */
    getTextAttr(attrName: string, startIndex?: number, endIndex?: number): any;

    /**
     * Retrieves specified range of text.
     * Omit params → whole string; startIndex only → from index to end; both → [start, end)
     *
     * @param startIndex Optional zero-based start index
     * @param endIndex Optional zero-based end index (not included)
     * @returns Substring in specified range
     *
     * @example
     * var myText = fl.getDocumentDOM().selection[0].getTextString(4);
     * var myText = fl.getDocumentDOM().selection[0].getTextString(3, 9);
     */
    getTextString(startIndex?: number, endIndex?: number): string;

    /**
     * Sets specified attribute for text in optional range.
     * May alter textRuns array structure.
     * Omit params → entire text; startIndex only → single char; both → [start, end)
     *
     * @param attrName Name of TextAttrs property
     * @param attrValue Value to set
     * @param startIndex Optional zero-based start index
     * @param endIndex Optional zero-based end index (not included)
     *
     * @example
     * fl.getDocumentDOM().selection[0].setTextAttr("italic", true);
     * fl.getDocumentDOM().selection[0].setTextAttr("size", 10, 2);
     * fl.getDocumentDOM().selection[0].setTextAttr("fillColor", 0xff0000, 2, 8);
     */
    setTextAttr(attrName: string, attrValue: any, startIndex?: number, endIndex?: number): void;

    /**
     * Changes the text string within this Text object.
     * Omit params → replace whole text;
     * startIndex only → insert at position;
     * both → replace [start, end) with new string
     *
     * @param text New text string
     * @param startIndex Optional zero-based start index
     * @param endIndex Optional zero-based end index (not included)
     *
     * @example
     * fl.getDocumentDOM().selection[0].setTextString("this is a string");
     * fl.getDocumentDOM().selection[0].setTextString("01234567890");
     * fl.getDocumentDOM().selection[0].setTextString("abc", 4); // "0123abc4567890"
     * fl.getDocumentDOM().selection[0].setTextString("01234567890");
     * fl.getDocumentDOM().selection[0].setTextString("abcdefghij", 2, 8); // "01abcdefghij890"
     */
    setTextString(text: string, startIndex?: number, endIndex?: number): void;
}

