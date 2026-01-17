/**
 * Represents an item (preset or folder) in the Motion Presets panel (Window > Motion Presets).
 * The array of presetItem objects is a property of the presetPanel object (`fl.presetPanel.items`).
 *
 * All properties of the presetItem object are read-only.
 * To perform tasks such as deleting, renaming, or moving items, use the methods of the `presetPanel` object.
 */
interface PresetItem {
    /**
     * Read-only property: a Boolean value that specifies whether the item is installed along with Flash (`true`)
     * or is a custom item that you or someone else has created (`false`).
     *
     * If this value is `true`, you can consider it a "read-only" item;
     * it can’t be moved, deleted, or have any similar operations applied to it.
     *
     * @example
     * ```javascript
     * fl.outputPanel.clear();
     * var presetItemArray = fl.presetPanel.items;
     * for (i = 0; i < presetItemArray.length; i++) {
     *   var presetItem = presetItemArray[i];
     *   fl.trace(presetItem.name + ", default = " + presetItem.isDefault);
     * }
     * ```
     */
    readonly isDefault: boolean;

    /**
     * Read-only property: a Boolean value that specifies whether the item in the Motion Presets panel
     * is a folder (`true`) or a preset (`false`).
     *
     * @example
     * ```javascript
     * var presetItemArray = fl.presetPanel.items;
     * fl.trace(presetItemArray[0].isFolder); // true if first item is a folder
     * fl.trace(presetItemArray[1].isFolder); // false if second item is a preset
     * ```
     */
    readonly isFolder: boolean;

    /**
     * Read-only property: an integer that specifies the level of the item in the folder structure
     * of the Motion Presets panel. The "Default Folder" and "Custom Presets" folder are level 0.
     *
     * @example
     * ```javascript
     * var presetItemArray = fl.presetPanel.items;
     * fl.trace(presetItemArray[0].level); // e.g., 0
     * fl.trace(presetItemArray[1].level); // e.g., 1
     * ```
     */
    readonly level: number;

    /**
     * Read-only property: a string that represents the name of the preset or folder, without path information.
     *
     * @example
     * See {@link presetItem.path} for usage example.
     */
    readonly name: string;

    /**
     * Read-only property: specifies whether a folder in the Motion Presets panel is currently expanded (`true`)
     * or not (`false`). This property is `true` if the item is not a folder.
     *
     * To determine if an item is a folder or a preset, use {@link presetItem.isFolder}.
     *
     * @example
     * ```javascript
     * fl.outputPanel.clear();
     * var presetItemArray = fl.presetPanel.items;
     * for (i = 0; i < presetItemArray.length; i++) {
     *   var presetItem = presetItemArray[i];
     *   if (presetItem.isFolder) {
     *     var status = presetItem.open ? "Open" : "Closed";
     *     fl.trace(presetItem.level + "-" + presetItem.name + " folder is " + status);
     *   }
     * }
     * ```
     */
    readonly open: boolean;

    /**
     * Read-only property: a string that represents the path to the item in the Motion Presets panel folder tree,
     * including the item name.
     *
     * @example
     * ```javascript
     * fl.outputPanel.clear();
     * var presetItemArray = fl.presetPanel.items;
     * for (i = 0; i < presetItemArray.length; i++) {
     *   var presetItem = presetItemArray[i];
     *   fl.trace("Name: " + presetItem.name + "\n" + "Path: " + presetItem.path);
     *   fl.trace("");
     * }
     * ```
     */
    readonly path: string;
}