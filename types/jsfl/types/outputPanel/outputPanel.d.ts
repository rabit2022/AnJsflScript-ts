/**
 * Represents the Output panel, which displays troubleshooting information such as syntax errors.
 */
interface OutputPanel {
    /**
     * Clears the contents of the Output panel.
     *
     * @example
     * fl.outputPanel.clear();
     */
    clear(): void;

    /**
     * Saves the contents of the Output panel to a local text file.
     * @param fileURI A string, expressed as a file:/// URI, that specifies the local file to contain the contents of the Output panel.
     * @param bAppendToFile Optional. If true, appends the Output panel’s contents to the output file; if false (default), overwrites the file.
     * @param bUseSystemEncoding Optional. If true, saves using system encoding; if false (default), uses UTF-8 with BOM.
     *
     * @example
     * fl.outputPanel.save("file:///c|/tests/batch.log");
     */
    save(fileURI: string, bAppendToFile?: boolean, bUseSystemEncoding?: boolean): void;

    /**
     * Adds a line to the contents of the Output panel, terminated by a new line.
     * Displays the Output panel if it is not already visible.
     * Identical to fl.trace().
     * @param message A string that contains the text to add to the Output panel.
     *
     * @example
     * fl.outputPanel.clear();
     * fl.outputPanel.trace("Hello World!!!");
     * var myPet = "cat";
     * fl.outputPanel.trace("\nI have a " + myPet);
     * fl.outputPanel.trace("");
     * fl.outputPanel.trace("I love my " + myPet);
     * fl.outputPanel.trace("Do you have a " + myPet +"?");
     */
    trace(message: string): void;
}

