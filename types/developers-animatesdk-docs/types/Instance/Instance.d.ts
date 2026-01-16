/**
 * Flash Instance Object Type Definitions
 * Based on Adobe Flash MX 2004+ documentation.
 *
 * The Instance object is a subclass of the Element object.
 * It represents an instance of a library item placed on the Stage or within a symbol timeline.
 */

import {Element} from "../Element/Element";

/**
 * Represents an instance of a library item (symbol, bitmap, video, etc.) on the Flash Stage.
 * Availability: Flash MX 2004+
 */
export interface Instance extends Element {
  /**
   * Read-only; a string that represents the type of this instance.
   * Possible values:
   * - "symbol"
   * - "bitmap"
   * - "embedded video" (Flash MX 2004)
   * - "linked video"
   * - "video" (Flash 8+; replaces "embedded video" for items created via library.addNewItem("video"))
   * - "compiled clip"
   *
   * Note: In Flash MX 2004, video items added via `library.addNewItem("video")` report as "embedded_video".
   * Starting in Flash 8, the same operation yields "video".
   *
   * @example
   * // Select a movie clip on the Stage and run this script
   * const dom = fl.getDocumentDOM();
   * if (dom && dom.selection.length > 0) {
   *   const type = (dom.selection[0] as Instance).instanceType;
   *   fl.trace("This instance type is " + type);
   * }
   */
  readonly instanceType:
      | 'symbol'
      | 'bitmap'
      | 'embedded video'
      | 'linked video'
      | 'video'
      | 'compiled clip';

  /**
   * The LibraryItem used to instantiate this instance.
   * You may assign a different library item to this property,
   * but only if the new item is of the same type (e.g., you cannot replace a symbol instance with a bitmap).
   *
   * @example
   * // Change the selected instance to refer to the first item in the library
   * const dom = fl.getDocumentDOM();
   * if (dom && dom.selection.length > 0) {
   *   const selectedItem = dom.selection[0];
   *   if ('libraryItem' in selectedItem) {
   *     (selectedItem as Instance).libraryItem = dom.library.items[0];
   *   }
   * }
   */
  libraryItem: LibraryItem;
}



