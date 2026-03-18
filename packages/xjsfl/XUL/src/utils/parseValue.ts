export function parseValue(value: any, trim: boolean = true): any {
    if (value == null) return value;

    let str = String(value);
    if (trim) str = str.trim();

    // undefined
    if (str === "undefined") return undefined;

    // null / empty
    if (str === "null" || str === "") return null;

    // Boolean
    if (/^(true|false)$/i.test(str)) {
        return str.toLowerCase() === "true";
    }

    // Number（更安全）
    if (!Number.isNaN(Number(str)) && str !== "") {
        return Number(str);
    }

    // Hex (#FFFFFF / 0xFFFFFF)
    if (/^(#|0x)[0-9a-f]{6}$/i.test(str)) {
        return parseInt(str.replace("#", ""), 16);
    }

    // XML
    if(/^<(\w+)\b[\s\S]*(<\/\1>|\/>)$/.test(value))
    {
        let xml:XML|XMLList|string;
        try { xml = new XML(value); } // attempt to create XML
        catch(err)
        {
            try { xml = new XMLList(value); } // fall back to XMLList
            catch(err) { xml = value; } // fall back to text
        };
        return xml
    }


    // JSON（优先尝试，替代 eval）
    if (/^[\[{]/.test(str)) {
        try {
            return JSON.parse(str);
        } catch {
            // ignore
        }
    }

    // Date
    const time = Date.parse(str);
    if (!Number.isNaN(time)) {
        return new Date(time);
    }

    // fallback
    return str;
}
