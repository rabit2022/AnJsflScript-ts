/**
 * Represents the Compiler Errors panel in Adobe Flash CS3 Professional.
 * This object is a property of the global `fl` object and provides programmatic
 * access to the compiler errors log.
 *
 * @availability Flash CS3 Professional
 * @example
 * ```javascript
 * // Access via fl.compilerErrors
 * fl.compilerErrors.clear();
 * ```
 * @see {@link https://help.adobe.com/en_US/flash/cs/extend/}
 */
interface CompilerErrors {
    /**
     * Clears the contents of the Compiler Errors panel.
     *
     * @returns void
     *
     * @example
     * ```javascript
     * // Clears the contents of the Compiler Errors panel:
     * fl.compilerErrors.clear();
     * ```
     *
     * @see {@link CompilerErrors.save}
     */
    clear(): void;

    /**
     * Saves the contents of the Compiler Errors panel to a local text file.
     *
     * @param fileURI - A string expressed as a `file:///` URI specifying the output file path.
     *                  Example: `"file:///c|/tests/errors.log"`
     *                  > ⚠️ If the file already exists and `bAppendToFile` is not `true`,
     *                  > the file will be overwritten **without warning**.
     *
     * @param bAppendToFile - Optional. If `true`, appends content to the existing file.
     *                        If `false` (default), overwrites the file.
     *
     * @param bUseSystemEncoding - Optional. If `true`, uses the system's default text encoding.
     *                             If `false` (default), saves using UTF-8 with a Byte Order Mark (BOM).
     *
     * @returns void
     *
     * @example
     * ```javascript
     * // Saves the contents of the Compiler Errors panel to a file named errors.log in the C:\tests folder:
     * fl.compilerErrors.save("file:///c|/tests/errors.log");
     * ```
     *
     * @example
     * ```javascript
     * // Append to existing log using system encoding
     * fl.compilerErrors.save("file:///c|/logs/build.log", true, true);
     * ```
     *
     * @see {@link CompilerErrors.clear}
     */
    save(
        fileURI: FileURI,
        bAppendToFile?: boolean,
        bUseSystemEncoding?: boolean
    ): void;
}