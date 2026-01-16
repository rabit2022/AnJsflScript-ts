import {Item} from "../Item/Item";

/**
 * The VideoItem object is a subclass of the Item object.
 *
 * @see Item
 */
export interface VideoItem extends Item {
  /**
   * Read-only; a string containing a hexadecimal number that represents the number of seconds
   * that have elapsed between January 1, 1970, and the modification date of the original file (on disk)
   * at the time the file was imported to the library.
   * If the file no longer exists, this value is "00000000".
   *
   * @availability Flash CS4 Professional
   *
   * @example
   * // Assuming that the first item in the Library is a video item,
   * // the following code displays a hexadecimal number as described above.
   * var libItem = fl.getDocumentDOM().library.items[0];
   * fl.trace("Mod date when imported = " + libItem.fileLastModifiedDate);
   *
   * @see videoItem.sourceFileExists
   * @see videoItem.sourceFileIsCurrent
   * @see videoItem.sourceFilePath
   * @see FLfile.getModificationDate()
   */
  readonly fileLastModifiedDate: string;

  /**
   * Read-only; the modification date of the video item in the Library.
   * This value is incremented every time the video item is imported.
   *
   * @availability Flash Pro CS6
   *
   * @example
   * // Assuming the first item in the Library is a video item,
   * // the following code displays a hex number as described above.
   * var libItem = fl.getDocumentDOM().library.items[0];
   * fl.trace("Mod date when imported = " + libItem.lastModifiedDate);
   */
  readonly lastModifiedDate: string;

  /**
   * Read-only; a Boolean value that specifies whether the file that was imported to the Library
   * still exists in the location from where it was imported.
   *
   * @availability Flash CS4 Professional
   *
   * @example
   * // Assuming that the first item in the Library is a video item,
   * // the following code displays "true" if the file that was imported into the Library still exists.
   * var libItem = fl.getDocumentDOM().library.items[0];
   * fl.trace("sourceFileExists = " + libItem.sourceFileExists);
   *
   * @see videoItem.sourceFileIsCurrent
   * @see videoItem.sourceFilePath
   */
  readonly sourceFileExists: boolean;

  /**
   * Read-only; a Boolean value that specifies whether the file modification date of the Library item
   * is the same as the modification date (on disk) of the file that was imported.
   *
   * @availability Flash CS4 Professional
   *
   * @example
   * // Assuming that the first item in the Library is a video item,
   * // the following code displays "true" if the file that was imported has not been modified on disk since it was imported.
   * var libItem = fl.getDocumentDOM().library.items[0];
   * fl.trace("fileIsCurrent = " + libItem.sourceFileIsCurrent);
   *
   * @see videoItem.fileLastModifiedDate
   * @see videoItem.sourceFilePath
   */
  readonly sourceFileIsCurrent: boolean;

  /**
   * Read-only; a string, expressed as a file:/// URI that specifies the path to the video item.
   *
   * @availability Flash 8
   *
   * @example
   * // The following example displays the name and source file path of any items in the library that are of type video:
   * for (idx in fl.getDocumentDOM().library.items) {
   *     if (fl.getDocumentDOM().library.items[idx].itemType == "video") {
   *         var myItem = fl.getDocumentDOM().library.items[idx];
   *         fl.trace(myItem.name + " source is " + myItem.sourceFilePath);
   *     }
   * }
   *
   * @see videoItem.sourceFileExists
   */
  readonly sourceFilePath: string;

  /**
   * Read-only; a string that specifies the type of video the item represents.
   * Possible values are "embedded video" and "video".
   *
   * @availability Flash 8
   *
   * @example
   * // The following example displays the name and type of any items in the library that are of type video:
   * for (idx in fl.getDocumentDOM().library.items) {
   *     if (fl.getDocumentDOM().library.items[idx].itemType == "video") {
   *         var myItem = fl.getDocumentDOM().library.items[idx];
   *         fl.trace(myItem.name + " is " + myItem.videoType);
   *     }
   * }
   */
  readonly videoType: "embedded video" | "video";

  /**
   * Exports the specified item to an FLV file.
   *
   * @param fileURI A string, expressed as a file:/// URI, that specifies the path and name of the exported file.
   * @returns A Boolean value of true if the file is exported successfully; false otherwise.
   *
   * @availability Flash CS4 Professional
   *
   * @example
   * // Assuming that the first item in the Library is a video item, the following code exports it as an FLV file:
   * var videoFileURL = "file:///C|/out.flv";
   * var libItem = fl.getDocumentDOM().library.items[0];
   * libItem.exportToFLV(videoFileURL);
   */
  exportToFLV(fileURI: string): boolean;
}


