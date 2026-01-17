/**
 * The SoundItem object is a subclass of the Item object.
 * It represents a library item used to create a sound.
 * Available since Flash MX 2004.
 */
interface SoundItem extends Item {
    /**
     * A string that specifies the bit rate of a sound in the library.
     * Available only for the MP3 compression type.
     * Acceptable values: "8 kbps ", "16 kbps ", "20 kbps ", "24 kbps ", "32 kbps ",
     * "48 kbps ", "56 kbps ", "64 kbps ", "80 kbps ", "112 kbps ", "128 kbps ", "160 kbps ".
     * Stereo sounds exported at 8 Kbps or 16 Kbps are converted to mono.
     * Undefined for other compression types.
     * To set this property, set useImportedMP3Quality to false.
     *
     * @example
     * alert(fl.getDocumentDOM().library.items[0].bitRate);
     */
    bitRate:
        | "8 kbps "
        | "16 kbps "
        | "20 kbps "
        | "24 kbps "
        | "32 kbps "
        | "48 kbps "
        | "56 kbps "
        | "64 kbps "
        | "80 kbps "
        | "112 kbps "
        | "128 kbps "
        | "160 kbps "
        | undefined;

    /**
     * A string that specifies the bits value for a sound with ADPCM compression.
     * Acceptable values: "2 bit", "3 bit", "4 bit", "5 bit".
     * To set this property, set useImportedMP3Quality to false.
     *
     * @example
     * alert(fl.getDocumentDOM().library.items[0].bits);
     */
    bits: "2 bit" | "3 bit" | "4 bit" | "5 bit";

    /**
     * A string that specifies the compression type for a sound in the library.
     * Acceptable values: "Default", "ADPCM", "MP3", "Raw", "Speech".
     * To set this property, set useImportedMP3Quality to false.
     *
     * @example
     * fl.getDocumentDOM().library.items[0].compressionType = "Raw";
     * fl.getDocumentDOM().library.getSelectedItems().compressionType = "Speech";
     */
    compressionType: "Default" | "ADPCM" | "MP3" | "Raw" | "Speech";

    /**
     * A Boolean value available only for MP3 and Raw compression types.
     * true converts stereo to mono; false leaves as stereo.
     * For MP3, if bitRate < 20 kbps, this is forced to true regardless of setting.
     * To set this property, set useImportedMP3Quality to false.
     *
     * @example
     * fl.getDocumentDOM().library.items[0].convertStereoToMono = true;
     */
    convertStereoToMono: boolean;

    /**
     * Exports the specified item to an MP3 or WAV file (Macintosh and Windows).
     * Export settings are based on the item being exported.
     * If originalCompressionType !== "RAW", you can only export as MP3.
     * Returns true if successful; false otherwise.
     *
     * @param fileURI A string, expressed as a file:/// URI, specifying path and filename.
     * @returns true if exported successfully; false otherwise.
     *
     * @example
     * var soundFileURL = "file:///C|/out.wav";
     * var libItem = fl.getDocumentDOM().library.items[0];
     * libItem.exportToFile(soundFileURL);
     */
    exportToFile(fileURI: string): boolean;

    /**
     * Read-only. A hexadecimal string representing seconds since Jan 1, 1970,
     * indicating the modification date of the original file on disk at import time.
     * If the file no longer exists, value is "00000000".
     *
     * @example
     * var libItem = fl.getDocumentDOM().library.items[0];
     * fl.trace("Mod date when imported = " + libItem.fileLastModifiedDate);
     */
    readonly fileLastModifiedDate: string;

    /**
     * Read-only. Hexadecimal value indicating the modification date/time of the sound item in the Library.
     * Incremented every time the sound is re-imported (e.g., via Update button).
     *
     * @example
     * var libItem = fl.getDocumentDOM().library.items[0];
     * fl.trace("Mod date when imported = " + libItem.lastModifiedDate);
     */
    readonly lastModifiedDate: string;

    /**
     * Read-only. Specifies whether the item was originally imported as an MP3 file.
     * Possible values: "RAW", "MP3".
     *
     * @example
     * var libItem = fl.getDocumentDOM().library.items[0];
     * fl.trace("Imported compression type = "+ libItem.originalCompressionType);
     */
    readonly originalCompressionType: "RAW" | "MP3";

    /**
     * A string that specifies the playback quality for MP3-compressed sounds.
     * Acceptable values: "Fast", "Medium", "Best".
     * To set this property, set useImportedMP3Quality to false.
     *
     * @example
     * fl.getDocumentDOM().library.items[0].quality = "Best";
     */
    quality: "Fast" | "Medium" | "Best";

    /**
     * A string that specifies the sample rate for the audio clip.
     * Available only for ADPCM, Raw, and Speech compression types.
     * Acceptable values: "5 kHz", "11 kHz", "22 kHz", "44 kHz".
     * To set this property, set useImportedMP3Quality to false.
     *
     * @example
     * fl.getDocumentDOM().library.items[0].sampleRate = "5 kHz";
     */
    sampleRate: "5 kHz" | "11 kHz" | "22 kHz" | "44 kHz";

    /**
     * Read-only. true if the source file still exists at its original import location; false otherwise.
     *
     * @example
     * var libItem = fl.getDocumentDOM().library.items[0];
     * fl.trace("sourceFileExists = "+ libItem.sourceFileExists);
     */
    readonly sourceFileExists: boolean;

    /**
     * Read-only. true if the Library item’s modification date matches the on-disk file’s modification date; false otherwise.
     *
     * @example
     * var libItem = fl.getDocumentDOM().library.items[0];
     * fl.trace("fileIsCurrent = "+ libItem.sourceFileIsCurrent);
     */
    readonly sourceFileIsCurrent: boolean;

    /**
     * Read-only. A string (file:/// URI) representing the path and name of the originally imported file.
     *
     * @example
     * for (idx in fl.getDocumentDOM().library.items) {
     *   if (fl.getDocumentDOM().library.items[idx].itemType == "sound") {
     *     var myItem = fl.getDocumentDOM().library.items[idx];
     *     fl.trace(myItem.name + " source is " + myItem.sourceFilePath);
     *   }
     * }
     */
    readonly sourceFilePath: string;

    /**
     * A Boolean value. If true, all other sound properties are ignored,
     * and the imported MP3 quality is used.
     *
     * @example
     * fl.getDocumentDOM().library.items[0].useImportedMP3Quality = true;
     */
    useImportedMP3Quality: boolean;
}

