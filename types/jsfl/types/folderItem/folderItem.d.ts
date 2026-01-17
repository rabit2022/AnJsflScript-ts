/**
 * The `folderItem` object is a subclass of the {@link Item} object.
 * It represents a folder inside the Flash/Animate library.
 *
 * **Important**: The `folderItem` object does **not** define any unique properties or methods of its own.
 * All functionality is inherited from the base {@link Item} class.
 *
 * This type is available starting with Flash MX 2004.
 *
 * @example
 * ```js
 * // Get the first item in the current document's library
 * var lib = fl.getDocumentDOM().library;
 * var firstItem = lib.items[0];
 *
 * // Check if it's a folder
 * if (firstItem.itemType === "folder") {
 *   // TypeScript (and JSFL) will treat this as a folderItem
 *   fl.trace("Library folder found: " + firstItem.name);
 *   // You can use any property or method from the Item base class
 *   fl.trace("Full path: " + firstItem.name); // e.g., "Assets/Icons"
 * }
 * ```
 *
 * @example
 * ```js
 * // Create a new folder in the library and verify its type
 * fl.getDocumentDOM().library.newFolder("MyAssets");
 * var items = fl.getDocumentDOM().library.items;
 * for (var i = 0; i < items.length; i++) {
 *   if (items[i].name === "MyAssets" && items[i].itemType === "folder") {
 *     // This is a folderItem
 *     fl.trace("Successfully created folderItem: " + items[i].name);
 *   }
 * }
 * ```
 */
interface folderItem extends Item {
    // No additional properties or methods.
    // All members are inherited from the `Item` base class.
}

