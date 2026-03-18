/**
 * @file: XML.d.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/3/18 23:03
 * @project: AnJsflScript-ts
 * @description:
 */

declare global {
    /**
     * E4X XML node
     */
    interface XML {
        /**
         * Find nodes using shorthand filter syntax
         */
        find(path: string, descendants?: boolean): XMLList;

        /**
         * Get nodes via xJSFL-style path expression
         */
        get(path: string, debug?: boolean): XMLList | XML | any;

        /**
         * Set value on node via path
         */
        set(path: string, value: any, append?: boolean | number, debug?: boolean): XML;

        /**
         * Remove node(s) or attribute(s)
         */
        remove(path?: string, debug?: boolean): void;

        /**
         * Filter current node set
         */
        filter(filter: string): XMLList;

        /**
         * Pretty print XML
         */
        prettyPrint(useSystemNewline?: boolean): string;
    }
}

export {};
