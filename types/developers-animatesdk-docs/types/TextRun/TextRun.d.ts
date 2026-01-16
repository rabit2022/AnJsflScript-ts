/**
 * The TextRun object represents a run of characters that have attributes that match all of the properties in the TextAttrs object.
 * This object is a property of the Text object (text.textRuns).
 */
export interface TextRun {
  /**
   * Property; the text contained in the TextRun object.
   *
   * @example
   * // The following example displays the characters that make up the first run of characters in the selected text field in the Output panel:
   * fl.trace(fl.getDocumentDOM().selection[0].textRuns[0].characters);
   */
  readonly characters: string;

  /**
   * Property; the TextAttrs object containing the attributes of the run of text.
   *
   * @example
   * // The following example displays the properties of the first run of characters in the selected text field in the Output panel.
   * var curTextAttrs = fl.getDocumentDOM().selection[0].textRuns[0].textAttrs;
   * for (var prop in curTextAttrs) {
   *     fl.trace(prop + " = " + curTextAttrs[prop]);
   * }
   */
  readonly textAttrs: TextAttrs;
}

// Note: TextAttrs is referenced but not fully defined in the provided docs.
// A minimal placeholder is included to satisfy type references.
declare interface TextAttrs {
  // Properties are dynamic and enumerated at runtime per the example.
  [key: string]: any;
}