// ------------------------------------------------------------------------------------------------------------------------
//
//  ██  ██                  ██████       ██ ██              ██   ██
//  ██  ██                  ██           ██ ██              ██
//  ██ █████ █████ ████████ ██     █████ ██ ██ █████ █████ █████ ██ █████ █████
//  ██  ██   ██ ██ ██ ██ ██ ██     ██ ██ ██ ██ ██ ██ ██     ██   ██ ██ ██ ██ ██
//  ██  ██   █████ ██ ██ ██ ██     ██ ██ ██ ██ █████ ██     ██   ██ ██ ██ ██ ██
//  ██  ██   ██    ██ ██ ██ ██     ██ ██ ██ ██ ██    ██     ██   ██ ██ ██ ██ ██
//  ██  ████ █████ ██ ██ ██ ██████ █████ ██ ██ █████ █████  ████ ██ █████ ██ ██
//
// ------------------------------------------------------------------------------------------------------------------------
// ItemCollection

/**
 * ItemCollection
 * @overview	ItemCollection class enacpsulates and modifies Arrays of LibraryItems
 * @instance	collection
 */

xjsfl.init(this, ['Collection', 'Context', 'ElementCollection', 'Output', 'Utils']);

/*

	// context = lib or folder?

	//fl.getDocumentDOM().library.moveToFolder("new", "Symbol 1", true);

	var lib = fl.getDocumentDOM().library;
	var items = lib.items

	cmp = function(a, b)
	{
		return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
	}

	items = items.sort(cmp)

	for(var i = 0; i < items.length; i++)
	{
		fl.trace(items[i].name)
	}

	pass in parent folder or library to callback?

*/

class ItemCollection {
    constructor(elements:LibraryItem[], dom:FlashDocument)) {
        super(elements instanceof Array ? elements : [elements]);

        dom = dom || $dom;
        if (!dom) {
            throw new Error('ItemCollection requires that a document be open before instantiation');
        }

    }
    get Library = function() {
        return dom.library;
    }

    // --------------------------------------------------------------------------------
    // # Standard methods		
    /**
     * Delete the item from the library
     * @returns	{ItemCollection}				The original ItemCollection
     */
    deleteItems: function() {
            for (var i = this.elements.length - 1; i >= 0; i--) {
                this.getLibrary().deleteItem(this.elements[i].name);
            }
            return this;
        },
        // --------------------------------------------------------------------------------
        // # UI methods			

        /**
         * Select the item in the library
         * @returns	{ItemCollection}				The original ItemCollection
         */
        select: function() {
            const library = this.getLibrary();
            library.selectNone();
            for (var i = 0; i < this.elements.length; i++) {
                library.selectItem(this.elements[i].name, false, true);
            }
            this.reveal();
            return this;
        },

        /**
         * Reveals the items in the library panel by expanding containing folders
         */
        reveal(): this {
            const expanded = new Set < string > ();
            const library = this.getLibrary();

            for (const el of this.elements) {
                const parts = el.name.split('/');

                // 逐级展开父目录
                for (let i = 1; i <= parts.length; i++) {
                    const path = parts.slice(0, i).join('/');

                    if (!expanded.has(path)) {
                        library.expandFolder(true, false, path);
                        expanded.add(path);
                    }
                }
            }

            return this;
        }

    /**
     * Visually expands or collapses folders in the library panel
     */
    expand(state: boolean = true, recurse: boolean = false): this {
        const library = this.getLibrary();

        for (const item of this.elements) {
            if (item.itemType === 'folder') {
                library.expandFolder(state, recurse, item.name);
            }
        }

        return this;
    }

    // --------------------------------------------------------------------------------
    // # Attribute methods
    /**
     * Updates the elements from the hard disk
     * @returns	{ItemCollection}				The original ItemCollection
     */
    update: function() {
            var library = this.getLibrary();
            this.elements.forEach(function(e) {
                library.updateItem(e.name)
            }, this);
            return this;
        },


        set < K extends keyof Item > (
            key: K,
            value: Item[K] | ((el: Item, index: number, all: Item[]) => Item[K])
        ): this {
            const fn =
                typeof value === 'function' ?
                value :
                () => value;

            this.elements.forEach((el, i, all) => {
                el[key] = fn(el, i, all);
            });

            return this.update();
        }

    setMany(
        props: Partial < {
            [K in keyof Item]:
                |
                Item[K] |
                ((el: Item, index: number, all: Item[]) => Item[K])
        } >
    ): this {
        for (const key in props) {
            this.set(key as keyof Item, props[key] !);
        }
        return this;
    }

    collection.set('x', 10);
    collection.set('x', (el, i) => i * 10);
    collection.setMany({
        x: 10,
        y: el => el.x * 2,
        visible: true
    });

    // type RenameCallback = (
    //     item: Item,
    //     index: number,
    //     all: Item[],
    //     originalName: string
    // ) => string;

    interface RenameOptions {
        startIndex ? : number;
        padding ? : number | 'auto';
        separator ? : string;
    }
    rename(base: RenameCallback): this;
    rename(base: string, options ? : RenameOptions): this;

    rename(
        base: string | RenameCallback,
        options: RenameOptions = {}
    ): this {
        const callback: RenameCallback =
            typeof base === 'function' ?
            base :
            this.createRenameCallback(base, options);

        this.elements.forEach((el, index, all) => {
            const originalName = el.name.split('/').pop() !;
            el.name = callback(el, index, all, originalName);
        });

        return this;
    }

    private createRenameCallback(
        baseName: string,
        options: RenameOptions
    ): RenameCallback {
        const {
            startIndex = 1,
                separator = '_',
                padding = 'auto'
        } = options;

        return (_item, index, all) => {
            const num = index + startIndex;

            const padLength =
                padding === 'auto' ?
                String(all.length).length :
                typeof padding === 'number' ?
                padding :
                0;

            const suffix =
                padLength > 0 ?
                String(num).padStart(padLength, '0') :
                String(num);

            return `${baseName}${separator}${suffix}`;
        };
    }
    interface MoveOptions {
        replace ? : boolean; // default: false
        expand ? : boolean; // default: true
        sanitizePath ? : boolean; // default: true
    }
    move(
        path: string,
        options ? : MoveOptions = {}
    ): this {
        const {
            replace = false,
                expand = true,
                sanitizePath = true
        } = options;

        const targetPath = sanitizePath ?
            this.normalizePath(path) :
            path;

        const library = this.getLibrary();

        // ensure folder exists
        this.ensureFolder(targetPath);

        // apply move
        this.elements.forEach(el => {
            library.moveToFolder(
                targetPath,
                el.name,
                replace
            );
        });

        // expand folder (如果你以后确认可用)
        if (expand) {
            this.expandFolderPath(targetPath);
        }

        return this;
    }
    private normalizePath(path: string): string {
        return path
            .replace(/[:\(\)\[\]\*\+]/g, '')
            .replace(/(^\/+|\/+$)/g, '');
    }
    private ensureFolder(path: string): void {
        const library = this.getLibrary();

        if (!library.itemExists(path)) {
            library.addNewItem('folder', path);
        }
    }
    private expandFolderPath(path: string): void {
        // 你之前已经怀疑这里是 buggy 的
        // 那就先收口，未来修只改这里

        /*
        while (path !== '') {
          path = path.replace(/\/?[^\/]+$/, '');
          this.getLibrary().expandFolder(true, true, path);
        }
        */
    }

    collection.move('foo/bar');

    collection.move('foo/bar', {
        replace: true,
        expand: false
    });

    // --------------------------------------------------------------------------------
    // # Editing methods

    type ExecCallback < Item > = (
        item: Item,
        index: number,
        all: ItemCollection < Item >
    ) => void;
    interface ExecOptions {
        edit ? : boolean; // default true
        thisArg ? : unknown; // 可选兼容 old API
    }
    exec(callback: ExecCallback < Item > ): this;
    exec(callback: ExecCallback < Item > , options: ExecOptions): this;
    exec(
        callback: ExecCallback < Item > ,
        options: ExecOptions = {}
    ): this {
        const {
            edit = true,
                thisArg = this
        } = options;

        const library = this.getLibrary();

        this.elements.forEach((element, index) => {
            if (edit) {
                library.editItem(element.name);
            }

            callback.call(
                thisArg,
                element,
                index,
                this
            );
        });

        return this;
    }


    /**
     * Adds the items in the collection to the stage, returning an ElementCollection
     * of the newly-added elements
     */
    addToStage(
        context: Context = Context.create(),
        x: number = 0,
        y: number = 0
    ): ElementCollection {

        const added: Element[] = [];

        context.goto();

        const STAGE_ADDABLE_TYPES = new Set < string > ([
            'movie clip',
            'graphic',
            'button',
            'bitmap',
            'component',
            'compiled clip',
            'video',
            'linked video',
            'embedded video'
        ]);

        for (const item of this.elements) {
            if (!STAGE_ADDABLE_TYPES.has(item.itemType)) {
                continue;
            }

            context.dom.addItem({
                x,
                y
            }, item);

            const el = context.dom.selection[0];
            if (el) {
                added.push(el);
            }
        }

        return new ElementCollection(added).select();
    }


    static toString = function() {
        return '[class ItemCollection]';
    }












}













ItemCollection = {






    // --------------------------------------------------------------------------------
    // # Utility methods

    /**
     * Sort the elements by path
     * @returns	{ItemCollection}				The original ItemCollection
     */
    sort: function() {
        Utils.sortOn(this.elements, 'name', true);
        return this;
    },


    /**
     * Debugging function to list the items in the collection
     * @param	{String}			label		An optional label to add to the inspect() output
     * @returns	{ItemCollection}				The original ItemCollection
     */
    list: function(label) {
        Output.list(this.elements, 'name', label || this.toString());
        return this;
    }

}

ItemCollection = Collection.extend(ItemCollection)


xjsfl.classes.register('ItemCollection', ItemCollection);