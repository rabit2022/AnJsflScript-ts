/**
 * Represents the current document's library panel.
 */
interface FlashLibrary {
    /**
     * An array of all Item objects in the library.
     */
    readonly items: LibraryItem[];

    /**
     * An array of library Items that are not used in the document.
     */
    readonly unusedItems: LibraryItem[];

    /**
     * Adds the current or specified item to the Stage at the specified position.
     * @param position A point that specifies the x,y position of the center of the item on the Stage.
     * @param namePath Optional. A string that specifies the name of the item. If the item is in a folder, specify its name and path using slash notation.
     * @returns true if the item is successfully added to the document; false otherwise.
     *
     * @example
     * fl.getDocumentDOM().library.addItemToDocument({x:3, y:60});
     * fl.getDocumentDOM().library.addItemToDocument({x:550.0, y:485.0}, "folder1/Symbol1");
     */
    addItemToDocument(position: FlashPoint, namePath?: string): boolean;

    /**
     * Creates a new item of the specified type in the Library panel and sets the new item to the currently selected item.
     * @param type The type of item to create. Acceptable values: "video", "movie clip", "button", "graphic", "bitmap", "screen", "folder".
     * @param namePath Optional. A string that specifies the name (and optional path) of the item to be added.
     * @returns true if the item is successfully created; false otherwise.
     *
     * @example
     * fl.getDocumentDOM().library.addNewItem("button", "folderTwo/start");
     */
    addNewItem(type: LibItemType, namePath?: string): boolean;

    /**
     * Deletes the current items or a specified item from the Library panel.
     * @param namePath Optional. A string specifying the item (or folder) to delete. If omitted, deletes currently selected items.
     * @returns true if the items are successfully deleted; false otherwise.
     *
     * @example
     * fl.getDocumentDOM().library.deleteItem();
     * fl.getDocumentDOM().library.deleteItem("Folder_1/Symbol_1");
     */
    deleteItem(namePath?: string): boolean;

    /**
     * Makes a copy of the currently selected or specified item.
     * @param namePath Optional. A string specifying the item to duplicate.
     * @returns true if the item is duplicated successfully; false otherwise.
     *
     * @example
     * fl.getDocumentDOM().library.duplicateItem("test/square");
     */
    duplicateItem(namePath?: string): boolean;

    /**
     * Opens the currently selected or specified item in Edit mode.
     * @param namePath Optional. A string specifying the item to edit.
     * @returns true if the specified item exists and can be edited; false otherwise.
     *
     * @example
     * fl.getDocumentDOM().library.editItem("test/circle");
     */
    editItem(namePath?: string): boolean;

    /**
     * Returns the library item’s index value (zero-based).
     * @param namePath A string that specifies the name of the item (with optional folder path).
     * @returns An integer representing the item’s zero-based index in the flat library list.
     *
     * @example
     * var sqIndex = fl.getDocumentDOM().library.findItemIndex("test/square"); alert(sqIndex);
     */
    findItemIndex(namePath: string): number;

    /**
     * Gets the property for the selected item.
     * @param property The name of the property to retrieve (see Item object properties).
     * @returns A string value for the property.
     *
     * @example
     * alert(fl.getDocumentDOM().library.getItemProperty("linkageIdentifier"));
     */
    getItemProperty(property: string): string;

    /**
     * Gets the type of object currently selected or specified by a library path.
     * @param namePath Optional. A string specifying the item path. If omitted, uses current selection (fails if multiple selected).
     * @returns A string specifying the type of object (e.g., "symbol", "bitmap", etc.).
     *
     * @example
     * alert(fl.getDocumentDOM().library.getItemType("Folder_1/Folder_2/Symbol_1"));
     */
    getItemType(namePath?: string): string;

    /**
     * Gets the array of all currently selected items in the library.
     * @returns An array of selected Item objects.
     *
     * @example
     * var selItems = fl.getDocumentDOM().library.getSelectedItems(); selItems[0].sampleRate = "11 kHz";
     */
    getSelectedItems(): LibraryItem[];

    /**
     * Checks to see if a specified item exists in the library.
     * @param namePath A string that specifies the name of the item (with optional folder path).
     * @returns true if the specified item exists; false otherwise.
     *
     * @example
     * alert(fl.getDocumentDOM().library.itemExists('Folder_1/Symbol_1'));
     */
    itemExists(namePath: string): boolean;

    /**
     * Moves the currently selected or specified library item to a specified folder.
     * @param folderPath Path to target folder. Use "" to move to root.
     * @param itemToMove Optional. Name/path of item to move. If omitted, moves current selection.
     * @param bReplace Optional. If true and item with same name exists, replaces it. Default: false.
     * @returns true if the item moves successfully; false otherwise.
     *
     * @example
     * fl.getDocumentDOM().library.moveToFolder("new", "Symbol_1", true);
     */
    moveToFolder(folderPath: string, itemToMove?: string, bReplace?: boolean): boolean;

    /**
     * Creates a new folder with the specified name (or default name if none provided).
     * @param folderPath Optional. Full path of folder(s) to create.
     * @returns true if folder is created successfully; false otherwise.
     *
     * @example
     * fl.getDocumentDOM().library.newFolder("first/second");
     */
    newFolder(folderPath?: string): boolean;

    /**
     * Renames the currently selected library item in the Library panel.
     * @param name A string that specifies a new name for the library item.
     * @returns true if rename succeeds; false if multiple items selected or failure.
     *
     * @example
     * fl.getDocumentDOM().library.renameItem("new name");
     */
    renameItem(name: string): boolean;

    /**
     * Selects or deselects all items in the library.
     * @param bSelectAll Optional. true to select all (default), false to deselect all.
     *
     * @example
     * fl.getDocumentDOM().library.selectAll();
     * fl.getDocumentDOM().library.selectAll(false);
     */
    selectAll(bSelectAll?: boolean): void;

    /**
     * Selects a specified library item.
     * @param namePath A string that specifies the name of the item (with optional folder path).
     * @param bReplaceCurrentSelection Optional. true to replace current selection (default), false to add to it.
     * @param bSelect Optional. true to select (default), false to deselect.
     * @returns true if the specified item exists; false otherwise.
     *
     * @example
     * fl.getDocumentDOM().library.selectItem("untitled Folder_1/Symbol_1");
     * fl.getDocumentDOM().library.selectItem("untitled Folder_1/Symbol_1", false);
     * fl.getDocumentDOM().library.selectItem("untitled Folder_1/Symbol_1", true, false);
     */
    selectItem(namePath: string, bReplaceCurrentSelection?: boolean, bSelect?: boolean): boolean;

    /**
     * Deselects all the library items.
     *
     * @example
     * fl.getDocumentDOM().library.selectNone();
     */
    selectNone(): void;

    /**
     * Sets the property for all selected library items (ignoring folders).
     * @param property The name of the property to set.
     * @param value The value to assign.
     *
     * @example
     * fl.getDocumentDOM().library.setItemProperty("symbolType", "button");
     */
    setItemProperty(property: string, value: any): void;

    /**
     * Updates the specified item (equivalent to right-click > Update).
     * @param namePath Optional. Item path to update. If omitted, updates current selection.
     * @returns true if updated successfully; false otherwise.
     *
     * @example
     * alert(fl.getDocumentDOM().library.updateItem());
     */
    updateItem(namePath?: string): boolean;
}
