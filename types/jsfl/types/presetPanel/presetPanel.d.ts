interface PresetPanel {
    /**
     * An array of presetItem objects in the Motion Presets panel.
     * Each item represents either a folder or a preset.
     *
     * @example
     * var itemArray = fl.presetPanel.items;
     * var length = itemArray.length;
     * for (x=0; x<length; x++) {
     *     fl.trace(itemArray[x].path);
     * }
     */
    readonly items: PresetItem[];

    /**
     * If a single motion tween is currently selected on the Stage,
     * adds that motion to the Motion Presets panel.
     *
     * @param namePath Optional. Specifies the path and name (e.g., "Custom Presets/Bouncing Ball").
     *                 If omitted, added as "Custom presetn" in Custom Presets folder.
     * @returns true if successfully added; false otherwise (e.g., duplicate name or invalid selection).
     *
     * @example
     * fl.presetPanel.addNewItem("Custom Presets/Bouncing Ball");
     */
    addNewItem(namePath?: string): boolean;

    /**
     * Applies the specified or currently selected preset to the currently selected item on the Stage.
     *
     * @param presetPath Optional. Full path/name of preset (e.g., "Custom Presets/Bounces/aDribble").
     *                   If omitted, uses currently selected preset.
     * @returns true if applied successfully; false if invalid path, no/multiple presets selected,
     *          or target not compatible.
     *
     * @example
     * var result = fl.presetPanel.applyPreset("Custom Presets/Bounces/aDribble");
     * fl.trace(result);
     */
    applyPreset(presetPath?: string): boolean;

    /**
     * Deletes the specified folder and all its subfolders/presets from the Motion Presets panel.
     * Cannot delete folders in "Default Presets".
     *
     * @param folderPath Optional. Path to folder (e.g., "Custom Presets/Bouncing").
     *                   If omitted, deletes currently selected folders.
     * @returns true if deleted successfully; false otherwise.
     * ⚠️ No confirmation; irreversible.
     *
     * @example
     * fl.presetPanel.deleteFolder("Custom Presets/Bouncing");
     */
    deleteFolder(folderPath?: string): boolean;

    /**
     * Deletes the specified preset from the Motion Presets panel.
     * Cannot delete presets in "Default Presets".
     *
     * @param namePath Optional. Path and name of preset (e.g., "Custom Presets/aDribble").
     *                 If omitted, deletes currently selected presets.
     * @returns true if deleted successfully; false otherwise.
     * ⚠️ No confirmation; irreversible.
     *
     * @example
     * fl.presetPanel.deleteItem("Custom Presets/aDribble");
     */
    deleteItem(namePath?: string): boolean;

    /**
     * Expands or collapses the specified or currently selected folder(s).
     *
     * @param bExpand Optional. true = expand (default), false = collapse.
     * @param bRecurse Optional. true = include subfolders (default: false).
     * @param folderPath Optional. Path to target folder (e.g., "Custom Presets").
     *                   If omitted, affects currently selected folder(s).
     * @returns true if operation succeeded; false otherwise.
     *
     * @example
     * fl.presetPanel.expandFolder(true, false, "Custom Presets");
     * fl.presetPanel.expandFolder(true, true, "Custom Presets");
     */
    expandFolder(bExpand?: boolean, bRecurse?: boolean, folderPath?: string): boolean;

    /**
     * Exports the specified or currently selected preset to an XML file.
     * Folders cannot be exported. Cannot overwrite existing files.
     *
     * @param fileURI Required. File URI (e.g., "file:///C|/My Presets/myPreset.xml").
     *                If ends with '/', filename = preset name + ".xml".
     * @param namePath Optional. Path/name of preset to export (e.g., "Default Presets/pulse").
     *                 If omitted, exports currently selected preset.
     * @returns true if exported successfully; false otherwise.
     *
     * @example
     * fl.presetPanel.exportItem("file:///C|/My Presets/");
     * fl.presetPanel.exportItem("file:///C|/My Presets/myFavoritePreset.xml");
     * fl.presetPanel.exportItem("file:///C|/My Presets/", "Default Presets/pulse");
     * fl.presetPanel.exportItem("file:///C|/My Presets/thePulsePreset.xml", "Default Presets/pulse");
     */
    exportItem(fileURI: string, namePath?: string): boolean;

    /**
     * Returns the index of a preset in the presetPanel.items array.
     *
     * @param presetName Optional. Name/path of preset.
     *                   If omitted, returns index of currently selected preset.
     * @returns Index (>=0) if found; -1 if not found, no selection, or multiple selections.
     *
     * @example
     * var selectedPreset = fl.presetPanel.findItemIndex();
     * fl.trace(selectedPreset);
     * fl.trace(fl.presetPanel.items[selectedPreset].path);
     */
    findItemIndex(presetName?: string): number;

    /**
     * Returns an array of currently selected presetItem objects.
     *
     * @returns Array of selected items (presets or folders).
     *
     * @example
     * var itemArray = fl.presetPanel.getSelectedItems();
     * var length = itemArray.length;
     * for (x=0; x<length; x++) {
     *     fl.trace(itemArray[x].path);
     * }
     */
    getSelectedItems(): PresetItem[];

    /**
     * Imports a preset from an XML file into the Motion Presets panel.
     *
     * @param fileURI Required. File URI to XML preset (e.g., "file:///C|/My Presets/thePulsePreset.xml").
     * @param namePath Optional. Destination folder and name (e.g., "Custom Presets/Pulse/fastPulse").
     *                 If omitted, placed in "Custom Presets" with XML filename (no .xml).
     * @returns true if imported successfully; false otherwise.
     *
     * @example
     * fl.presetPanel.importItem("file:///C|/My Presets/thePulsePreset.xml", "Custom Presets/Pulse/fastPulse");
     */
    importItem(fileURI: string, namePath?: string): boolean;

    /**
     * Moves the specified or currently selected item(s) to a folder.
     * Cannot move to/from "Default Presets".
     *
     * @param folderPath Required. Destination folder path (e.g., "Custom Presets/Bouncing").
     *                   Use "" to move to root of "Custom Presets".
     * @param namePath Optional. Path/name of item to move (e.g., "Custom Presets/Fast Bounce").
     *                 If omitted, moves currently selected items.
     * @returns true if moved successfully; false otherwise.
     *
     * @example
     * fl.presetPanel.moveToFolder("Custom Presets/Bouncing");
     * fl.presetPanel.moveToFolder("Custom Presets/Bouncing", "Custom Presets/Fast Bounce");
     */
    moveToFolder(folderPath: string, namePath?: string): boolean;

    /**
     * Creates a new folder in the Motion Presets panel.
     * Only one level can be created at a time; parent must exist.
     * Cannot create under "Default Presets".
     *
     * @param folderPath Optional. Full path and name (e.g., "Custom Presets/Bouncing").
     *                   If omitted, creates "Untitled folder n" under "Custom Presets".
     * @returns true if created successfully; false otherwise.
     *
     * @example
     * fl.presetPanel.newFolder("Custom Presets/Bouncing");
     */
    newFolder(folderPath?: string): boolean;

    /**
     * Renames the currently selected preset or folder.
     * Only works for a single selected item in "Custom Presets".
     *
     * @param newName Required. New name for the item.
     * @returns true if renamed successfully; false if no/multiple selection,
     *          item in "Default Presets", or name conflict.
     *
     * @example
     * var renamed = fl.presetPanel.renameItem("Bounce Faster");
     * fl.trace(renamed);
     */
    renameItem(newName: string): boolean;

    /**
     * Selects or deselects an item in the Motion Presets panel.
     *
     * @param namePath Required. Path/name of item (e.g., "Default Presets/fly-in-blur-right").
     * @param bReplaceCurrentSelection Optional. true = replace current selection (default),
     *                                 false = add to selection.
     * @param bSelect Optional. true = select (default), false = deselect.
     *                  If false, bReplaceCurrentSelection is ignored.
     * @returns true if selection changed successfully; false otherwise.
     *
     * @example
     * fl.presetPanel.selectItem("Default Presets/fly-in-blur-right", false);
     */
    selectItem(namePath: string, bReplaceCurrentSelection?: boolean, bSelect?: boolean): boolean;
}

