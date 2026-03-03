/**
 * The `FLfile` object enables Flash/Animate extensions (JSFL scripts) to access,
 * modify, and remove files and folders on the local file system.
 *
 * This API extends JavaScript via a shared library:
 * - Windows: `%LOCALAPPDATA%\Adobe\Flash CC\<lang>\Configuration\External Libraries\FLfile.dll`
 * - macOS: `～/Library/Application Support/Adobe/Flash CC/<lang>/Configuration/External Libraries/FLfile.dll`
 *
 * ⚠️ Do not confuse this with Flash document symbol libraries—they are unrelated.
 *
 * All file/folder paths must be specified as **file URI strings** in the format:
 * - Windows: `"file:///C|/folder/file.txt"`
 * - macOS:  `"file:///Macintosh HD/folder/file.txt"`
 *
 * Example URI construction:
 * ```js
 * // Create folder: C:\Program Files\MyApp\config
 * FLfile.createFolder("file:///C|/Program Files/MyApp/config");
 *
 * // Write file inside it
 * FLfile.write("file:///C|/Program Files/MyApp/config/config.ini", "");
 *
 * // On macOS
 * FLfile.createFolder("file:///Macintosh/MyApp/config");
 * ```
 */
interface FLfile {
    /**
     * Copies a file from one location to another.
     * Fails if the destination file already exists.
     *
     * @param fileURI Source file as a `file:///` URI.
     * @param copyURI Destination file as a `file:///` URI.
     * @returns `true` if successful; `false` otherwise.
     *
     * @example
     * ```js
     * var originalFileURI = "file:///C|/Program Files/MyApp/config.ini";
     * var newFileURI = "file:///C|/Program Files/MyApp/config_backup.ini";
     * FLfile.copy(originalFileURI, newFileURI);
     * ```
     *
     * @example
     * ```js
     * // One-liner version
     * FLfile.copy(
     *   "file:///C|/Program Files/MyApp/config.ini",
     *   "file:///C|/Program Files/MyApp/config_backup.ini"
     * );
     * ```
     */
    copy(fileURI: string, copyURI: string): boolean;

    /**
     * Creates one or more directories (folders) at the specified path.
     * Parent directories are created automatically if missing.
     * Returns `false` if the full path already exists.
     *
     * @param folderURI Folder path as a `file:///` URI.
     * @returns `true` if created successfully; `false` if already exists.
     *
     * @example
     * ```js
     * // Creates both MyData and TempData if missing
     * FLfile.createFolder("file:///c|/MyData/TempData");
     * ```
     *
     * @example
     * ```js
     * // Create under Flash config directory
     * fl.trace(FLfile.createFolder(fl.configURI + "folder01/subfolder01"));
     * ```
     *
     * @example
     * ```js
     * var folderURI = "file:///c|/tempFolder";
     * if (FLfile.createFolder(folderURI)) {
     *   alert("Created " + folderURI);
     * } else {
     *   alert(folderURI + " already exists");
     * }
     * ```
     */
    createFolder(folderURI: string): boolean;

    /**
     * Checks whether a file or folder exists at the given URI.
     *
     * @param fileURI Path to check as a `file:///` URI.
     * @returns `true` if exists; `false` otherwise.
     *
     * @example
     * ```js
     * var fileURI = "file:///c|/temp/mydata.txt";
     * if (FLfile.exists(fileURI)) {
     *   alert(fileURI + " exists.");
     * } else {
     *   alert(fileURI + " does not exist.");
     * }
     * ```
     *
     * @example
     * ```js
     * // Ensure config file exists
     * var configFile = "file:///C|/MyApplication/config.ini";
     * if (!FLfile.exists(configFile)) {
     *   FLfile.write(configFile, ""); // Create empty file
     * }
     * ```
     */
    exists(fileURI: string): boolean;

    /**
     * Retrieves system attributes of a file or folder.
     * Always check existence with `FLfile.exists()` first—behavior is undefined otherwise.
     *
     * Attribute characters:
     * - `R`: Read-only (macOS: "locked")
     * - `D`: Directory (folder)
     * - `H`: Hidden (Windows only)
     * - `S`: System file/folder (Windows only)
     * - `A`: Ready for archiving (Windows only)
     *
     * Returns empty string if no special attributes.
     *
     * @param fileOrFolderURI Target path as a `file:///` URI.
     * @returns Attribute string (e.g., `"DH"` for hidden directory).
     *
     * @example
     * ```js
     * var URI = "file:///c|/temp/mydata.txt";
     * if (FLfile.exists(URI)) {
     *   var attr = FLfile.getAttributes(URI);
     *   if (attr && attr.indexOf("R") !== -1) {
     *     alert(URI + " is read only!");
     *   }
     * }
     * ```
     */
    getAttributes(fileOrFolderURI: string): string;

    /**
     * Gets file/folder creation time as seconds since Unix epoch (Jan 1, 1970),
     * returned as a **hexadecimal string**.
     * Primarily used for comparing timestamps.
     *
     * @param fileOrFolderURI Target path as a `file:///` URI.
     * @returns Hex string of seconds (e.g., `"65a3b2f0"`); `"00000000"` if not found.
     *
     * @example
     * ```js
     * var fileURI = "file:///C|/MyApplication/MyApp.fla";
     * var creationTime = FLfile.getCreationDate(fileURI);
     * var modificationTime = FLfile.getModificationDate(fileURI);
     * if (modificationTime > creationTime) {
     *   alert("The file has been modified since it was created.");
     * } else {
     *   alert("The file has not been modified since it was created.");
     * }
     * ```
     */
    getCreationDate(fileOrFolderURI: string): string;

    /**
     * Gets file/folder creation time as a JavaScript `Date` object.
     *
     * @param fileOrFolderURI Target path as a `file:///` URI.
     * @returns `Date` object; defaults to `Dec 31, 1969 00:00:00 GMT` if not found.
     *
     * @example
     * ```js
     * var file1Date = FLfile.getCreationDateObj("file:///c|/temp/file1.txt");
     * fl.trace(file1Date); // Human-readable date in Output panel
     * ```
     */
    getCreationDateObj(fileOrFolderURI: string): Date;

    /**
     * Gets last modification time as seconds since Unix epoch,
     * returned as a **hexadecimal string**.
     *
     * @param fileOrFolderURI Target path as a `file:///` URI.
     * @returns Hex string of seconds; `"00000000"` if not found.
     *
     * @example
     * ```js
     * var file1 = "file:///C|/MyApplication/MyApp.fla";
     * var file2 = "file:///C|/MyApplication/MyApp.as";
     * var t1 = FLfile.getModificationDate(file1);
     * var t2 = FLfile.getModificationDate(file2);
     * if (t1 > t2) {
     *   alert("File 2 is older than File 1");
     * } else if (t1 < t2) {
     *   alert("File 1 is older than File 2");
     * } else {
     *   alert("File 1 and File 2 were saved at the same time");
     * }
     * ```
     */
    getModificationDate(fileOrFolderURI: string): string;

    /**
     * Gets last modification time as a JavaScript `Date` object.
     *
     * @param fileOrFolderURI Target path as a `file:///` URI.
     * @returns `Date` object; defaults to `Dec 31, 1969 00:00:00 GMT` if not found.
     *
     * @example
     * ```js
     * var file1Date = FLfile.getModificationDateObj("file:///c|/temp/file1.txt");
     * trace(file1Date);
     * ```
     */
    getModificationDateObj(fileOrFolderURI: string): Date;

    /**
     * Gets file size in bytes.
     * ⚠️ Only accurate for files ≤ 2 GB.
     * Returns `0` if file doesn't exist—use `exists()` to distinguish from zero-byte files.
     *
     * @param fileURI File path as a `file:///` URI.
     * @returns File size in bytes; `0` if not found.
     *
     * @example
     * ```js
     * var URL = "file:///c|/temp/mydata.txt";
     * var fileSize = FLfile.getSize(URL);
     * ```
     */
    getSize(fileURI: string): number;

    /**
     * Lists contents of a folder.
     * Supports wildcards: `*` (one or more chars), `?` (single char).
     *
     * @param folderURI Folder path as a `file:///` URI (wildcards allowed).
     * @param filesOrDirectories Optional filter: `"files"` or `"directories"`.
     *                           If omitted, returns both.
     * @returns Array of item names; empty array if folder missing or no matches.
     *
     * @example
     * ```js
     * var folderURI = "file:///C|/temp";
     * var files = FLfile.listFolder(folderURI, "files");          // files only
     * var dirs = FLfile.listFolder(folderURI, "directories");    // folders only
     * var all = FLfile.listFolder(folderURI);                    // both
     * fl.trace("Files: " + files);
     * fl.trace("Folders: " + dirs);
     * fl.trace("All: " + all);
     * ```
     *
     * @example
     * ```js
     * // List all .txt files
     * var list = FLfile.listFolder("file:///c|/temp/*.txt", "files");
     * if (list.length > 0) {
     *   alert("Text files: " + list.join(" "));
     * }
     * ```
     *
     * @example
     * ```js
     * // List all executables in Windows folder
     * var executables = FLfile.listFolder("file:///C|/WINDOWS/*.exe", "files");
     * alert(executables.join("\n"));
     * ```
     */
    listFolder(folderURI: string, filesOrDirectories?: "files" | "directories"): string[];

    /**
     * Converts a platform-specific file path to a `file:///` URI.
     *
     * @param fileName Platform path (e.g., `"C:\\outputPanel.txt"` on Windows).
     * @returns Equivalent `file:///` URI.
     *
     * @example
     * ```js
     * var myFilename = "C:\\outputPanel.txt";
     * var myURI = FLfile.platformPathToURI(myFilename);
     * fl.outputPanel.save(myURI);
     * ```
     */
    platformPathToURI(fileName: string): string;

    /**
     * Reads the entire contents of a text-based file (.txt, .js, .jsfl, etc.).
     *
     * @param fileURI File path as a `file:///` URI.
     * @returns File content as string; `null` if read fails.
     *
     * @example
     * ```js
     * var fileURI = "file:///c|/temp/mydata.txt";
     * var str = FLfile.read(fileURI);
     * if (str !== null) {
     *   alert(fileURI + " contains: " + str);
     * }
     * ```
     *
     * @example
     * ```js
     * // Read ActionScript class source
     * var code = FLfile.read("file:///C|/MyApplication/TextCarousel.as");
     * ```
     */
    read(fileURI: string): string | null;

    /**
     * Deletes a file or folder (recursively removes folder contents).
     * ⚠️ Read-only files cannot be deleted.
     *
     * @param fileOrFolderURI Path to delete as a `file:///` URI.
     * @returns `true` if successful; `false` otherwise.
     *
     * @example
     * ```js
     * var fileURI = prompt("Enter file/folder to delete:", "file:///c|/temp/delete.txt");
     * if (FLfile.exists(fileURI)) {
     *   var confirm = prompt("File exists. Delete? (y/n)", "y");
     *   if (confirm === "y" || confirm === "Y") {
     *     if (FLfile.remove(fileURI)) {
     *       alert(fileURI + " is deleted.");
     *     } else {
     *       alert("Failed to delete " + fileURI);
     *     }
     *   }
     * } else {
     *   alert(fileURI + " does not exist");
     * }
     * ```
     *
     * @example
     * ```js
     * // Delete config file
     * if (FLfile.remove("file:///C|/MyApplication/config.ini")) {
     *   alert("Configuration file deleted");
     * }
     * ```
     *
     * @example
     * ```js
     * // Delete entire folder and contents
     * FLfile.remove("file:///C|/MyApplication/Configuration/");
     * ```
     */
    remove(fileOrFolderURI: string): boolean;

    /**
     * Sets system-level attributes for a file or folder.
     * Always verify existence with `FLfile.exists()` first.
     *
     * Valid attribute characters:
     * - `N`: No special attributes (clears R/H/A/etc.)
     * - `A`: Archive-ready (Windows only)
     * - `R`: Read-only (macOS: "locked")
     * - `W`: Writable (overrides `R`)
     * - `H`: Hidden (Windows only)
     * - `V`: Visible (overrides `H`, Windows only)
     *
     * Rules:
     * - `RW` → treated as `W` (writable)
     * - `HV` → treated as `V` (visible)
     * - To ensure archive bit is off, call with `"N"` before setting other attrs.
     *
     * @param fileURI Target path as a `file:///` URI.
     * @param strAttrs Attribute string (e.g., `"RH"`).
     * @returns `true` if successful.
     *
     * @example
     * ```js
     * var URI = "file:///c|/temp/mydata.txt";
     * if (FLfile.exists(URI)) {
     *   // Set read-only + hidden (archive bit unchanged)
     *   FLfile.setAttributes(URI, "RH");
     * }
     * ```
     *
     * @example
     * ```js
     * var URI = "file:///c|/temp/mydata.txt";
     * if (FLfile.exists(URI)) {
     *   // Clear archive bit, then set RH
     *   FLfile.setAttributes(URI, "N");
     *   FLfile.setAttributes(URI, "RH");
     * }
     * ```
     */
    setAttributes(fileURI: string, strAttrs: string): boolean;

    /**
     * Converts a `file:///` URI to a platform-specific file path.
     *
     * @param fileURI A `file:///` URI.
     * @returns Platform-native path string.
     *
     * @example
     * ```js
     * var dir = fl.configDirectory;
     * var URI = FLfile.platformPathToURI(dir);
     * fl.trace(URI === fl.configURI); // true
     * ```
     */
    uriToPlatformPath(fileURI: string): string;

    /**
     * Writes a string to a file (UTF-8 encoded).
     * Creates the file if it doesn’t exist.
     * ⚠️ The parent directory **must already exist**—use `createFolder()` first.
     *
     * @param fileURI File path as a `file:///` URI.
     * @param textToWrite Text content to write.
     * @param strAppendMode Optional: if `"append"`, appends to existing content;
     *                      otherwise, overwrites the file.
     * @returns `true` if successful; `false` otherwise.
     *
     * @example
     * ```js
     * var URI = "file:///c|/temp/mydata.txt";
     * if (FLfile.write(URI, "xxx")) {
     *   alert("Wrote xxx to " + URI);
     * }
     * if (FLfile.write(URI, "aaa", "append")) {
     *   alert("Appended aaa to " + URI);
     * }
     * // Final content: "xxxaaa"
     * ```
     */
    write(fileURI: string, textToWrite: string, strAppendMode?: "append"): boolean;


    /**
     * 运行命令行
     * 重要：可以调用 powershell,cmd,bash等命令行工具,python,java等脚本语言,以及执行其他可执行文件
     * @param commandLine - 命令行参数
     * @return 是否成功运行,1表示成功,0表示失败
     */
    runCommandLine(commandLine: string): number;
}

