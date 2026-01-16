/**
 * Flash FontItem Object Type Definitions
 * Based on Adobe Flash MX 2004 through Flash CS5 Professional documentation.
 * The fontItem object is a subclass of the Item object.
 */

import {Item} from "../Item/Item";

/**
 * Represents a Font item in the Flash Library.
 * Availability: Flash MX 2004+
 */
export interface FontItem extends Item {
  /**
   * Specifies whether the Font item is bitmapped.
   * - `true`: Font is rendered as bitmap (device font not used).
   * - `false`: Font is vector-based (default).
   *
   * Availability: Flash CS4 Professional+
   *
   * @example
   * // Assuming the first library item is a Font item
   * const theItem = fl.getDocumentDOM().library.items[0] as FontItem;
   * fl.trace("bitmap: " + theItem.bitmap);
   */
  bitmap: boolean;

  /**
   * Specifies whether the Font item is bold.
   * - `true`: Bold style enabled.
   * - `false`: Regular weight.
   *
   * Availability: Flash CS4 Professional+
   *
   * @example
   * const theItem = fl.getDocumentDOM().library.items[0] as FontItem;
   * fl.outputPanel.clear();
   * fl.trace("bold: " + theItem.bold);
   * theItem.bold = true;
   * fl.trace("bold: " + theItem.bold);
   */
  bold: boolean;

  /**
   * A string specifying characters to embed within the SWF file.
   * Ensures text renders correctly even if the font isn't installed on the playback device.
   * Functionally equivalent to the "Font Embedding" dialog.
   * Can be read to inspect currently embedded characters.
   *
   * Availability: Flash CS5 Professional+
   *
   * @example
   * // Embed characters 'a', 'b', and 'c'
   * fl.getDocumentDOM().library.items[0].embeddedCharacters = "abc";
   */
  embeddedCharacters: string;

  /**
   * A string of pipe-delimited integers representing Unicode ranges to embed.
   * Corresponds to selections in the Font Embedding dialog.
   * Range numbers map to entries in `FontEmbedding/UnicodeTables.xml`.
   * Can be read to inspect current embedding ranges.
   *
   * Availability: Flash CS5 Professional+
   *
   * @example
   * // Embed ranges 1, 3, and 7
   * fl.getDocumentDOM().library.items[0].embedRanges = "1|3|7";
   *
   * // Reset embedding ranges
   * fl.getDocumentDOM().library.items[0].embedRanges = "";
   */
  embedRanges: string;

  /**
   * Specifies whether variant glyphs should be embedded in the published SWF.
   * - `true`: Embed variant glyphs (increases SWF size).
   * - `false`: Do not embed (default).
   *
   * Note: In Flash CS5+, this has no effect on TLF (Text Layout Framework) text,
   * as variant glyphs are always embedded for TLF. This property only affects
   * fonts used with classic `flash.text` APIs (available in CS4).
   *
   * Useful for languages with dynamic glyph substitution (e.g., Thai, Arabic, Hebrew, Greek).
   *
   * Availability: Flash CS4 Professional+ (no effect on TLF in CS5+)
   *
   * @example
   * // Function to embed a font symbol compatible with FTE (Flash Text Engine)
   * function embedFontSymbol(symbolName: string, fontName: string, includeVariants: boolean): void {
   *   const doc = fl.getDocumentDOM();
   *   if (!doc) return;
   *   // Delete existing symbol if present
   *   let index = doc.library.findItemIndex(symbolName);
   *   if (index > -1) doc.library.deleteItem(symbolName);
   *   // Create new font symbol
   *   doc.library.addNewItem('font', symbolName);
   *   index = doc.library.findItemIndex(symbolName);
   *   if (index > -1) {
   *     const fontObj = doc.library.items[index] as FontItem;
   *     fontObj.isDefineFont4Symbol = true;       // Enable FTE support
   *     fontObj.font = fontName;                  // Set device font
   *     fontObj.bold = false;
   *     fontObj.italic = false;
   *     fontObj.embedVariantGlyphs = includeVariants;
   *     // Force inclusion in SWF
   *     fontObj.linkageExportForAS = true;
   *     fontObj.linkageExportInFirstFrame = true;
   *   }
   * }
   *
   * // Dump all font symbols to Output panel
   * function dumpFontSymbols(): void {
   *   const doc = fl.getDocumentDOM();
   *   if (!doc) return;
   *   const items = doc.library.items;
   *   fl.trace("items length = " + items.length);
   *   for (let i = 0; i < items.length; i++) {
   *     const item = items[i];
   *     if (item.itemType === 'font') {
   *       fl.trace("name = " + item.name);
   *       fl.trace("DF4 symbol = " + (item as FontItem).isDefineFont4Symbol);
   *       fl.trace("font = " + (item as FontItem).font);
   *     }
   *   }
   * }
   */
  embedVariantGlyphs: boolean;

  /**
   * The name of the device font associated with this Font item.
   * Must correspond to an installed system font.
   * Use `fl.isFontInstalled()` to verify font availability.
   *
   * Note: The actual stored value may differ from the assigned string
   * (e.g., assigning "Times" may result in "Times-Roman").
   *
   * Availability: Flash CS4 Professional+
   *
   * @example
   * fl.outputPanel.clear();
   * const theItem = fl.getDocumentDOM().library.items[0] as FontItem;
   * fl.trace(theItem.font);        // e.g., "Arial"
   * theItem.font = "Times";
   * fl.trace(theItem.font);        // e.g., "Times-Roman"
   */
  font: string;

  /**
   * Specifies the output format of the font in the published SWF.
   * - `true`: Outputs a DefineFont4 symbol usable with `flash.text.engine` (FTE / TLF).
   * - `false`: Outputs a classic font usable with `flash.text.TextField` (default).
   *
   * Availability: Flash CS4 Professional+
   *
   * @see {@link FontItem.embedVariantGlyphs}
   */
  isDefineFont4Symbol: boolean;

  /**
   * Specifies whether the Font item is italic.
   * - `true`: Italic style enabled.
   * - `false`: Upright style.
   *
   * Availability: Flash CS4 Professional+
   *
   * @example
   * const theItem = fl.getDocumentDOM().library.items[0] as FontItem;
   * fl.outputPanel.clear();
   * fl.trace("italic: " + theItem.italic);
   * theItem.italic = true;
   * fl.trace("italic: " + theItem.italic);
   */
  italic: boolean;

  /**
   * The size of the Font item, in points.
   * Represented as an integer.
   *
   * Availability: Flash CS4 Professional+
   *
   * @example
   * const theItem = fl.getDocumentDOM().library.items[0] as FontItem;
   * fl.outputPanel.clear();
   * fl.trace("font size: " + theItem.size);
   * theItem.size = 24;
   * fl.trace("font size: " + theItem.size);
   */
  size: number;
}


