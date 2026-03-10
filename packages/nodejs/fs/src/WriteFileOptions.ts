

export type BufferEncoding =
    | "ascii"
    | "utf8"
    | "utf-8"
    | "utf16le"
    | "utf-16le"
    | "ucs2"
    | "ucs-2"
    | "base64"
    | "base64url"
    | "latin1"
    | "binary"
    | "hex";


interface ObjectEncodingOptions {
    encoding?: BufferEncoding | null | undefined;
}
type Mode = number | string;

export type WriteFileOptions =
    | (
    & ObjectEncodingOptions
    & {
    mode?: Mode | undefined;
    flag?: string | undefined;
    flush?: boolean | undefined;
}
    )
    | BufferEncoding
    | null;
