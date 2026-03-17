
// ------------------------------------------------------------------------------------------------------------------------
//
//                                                                                   ██   ██     ██   ██
//  ██  ██                       ██████       ██              ██                    ██  ██████ ██████  ██
//  ██  ██                       ██           ██              ██                   ██   ██     ██       ██
//  ██ █████ █████ ████████      ██     █████ ██ █████ █████ █████ █████ ████      ██   ██     ██       ██
//  ██  ██   ██ ██ ██ ██ ██      ██████ ██ ██ ██ ██ ██ ██     ██   ██ ██ ██        ██   ██████ ██████   ██
//  ██  ██   █████ ██ ██ ██          ██ █████ ██ █████ ██     ██   ██ ██ ██        ██       ██     ██   ██
//  ██  ██   ██    ██ ██ ██          ██ ██    ██ ██    ██     ██   ██ ██ ██        ██       ██     ██   ██
//  ██  ████ █████ ██ ██ ██      ██████ █████ ██ █████ █████  ████ █████ ██         ██  ██████ ██████  ██
//                                                                                   ██   ██     ██   ██
//
// ------------------------------------------------------------------------------------------------------------------------
// Item Selector

import {ElementCollection, ItemCollection} from "@xjafl/Collection"
import {Selectors} from "../Selectors";
import {Context} from "@xjsfl/Context";


function resolveParams(
    expression: string | null,
    elements: LibraryItem | LibraryItem[] | ElementCollection | ItemCollection,
    dom?: FlashDocument,
    context?: Context
) {
    let documentRef = dom || (context ? context.dom : null);

    // 🚨 必须有 document
    if (!documentRef) {
        throw new ReferenceError(
            "ReferenceError in $$(): Open a document before attempting to select items"
        );
    }

    const library = documentRef.library;
    let items: LibraryItem[] = library.items;


    // 🧩 解析 elements
    if (elements instanceof LibraryItem) {
        if (elements && elements instanceof FolderItem) {
            items = library.items.filter(element => element.name.startsWith(`${elements.name}/`));
        }
    } else if (elements instanceof ElementCollection) {
        items = elements.items.toArray();
        documentRef = elements.dom || documentRef;
    } else if (elements instanceof ItemCollection) {
        items = elements.toArray();
        documentRef = elements.dom || documentRef;
    } else if (Array.isArray(elements)) {
        items = elements;
    }

    return {expression, items, dom: documentRef, library}

}


export function $$(
    ...args: Parameters<typeof resolveParams>
) {
    // 👉 在这里做老逻辑解析
    const {expression, items, dom, library} = resolveParams(...args);


    // 🧪 如果没有 expression → 直接返回
    if (items && !expression) {
        return new ItemCollection(items, dom);
    }

    // 🔍 执行选择器过滤
    const filteredItems = Selectors.select(
        expression!,
        items,
        library
    );

    return new ItemCollection(filteredItems, dom);
}
