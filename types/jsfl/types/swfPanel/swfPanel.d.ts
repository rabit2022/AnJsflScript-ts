// swfPanel.d.ts

/**
 * Represents a Window SWF panel in the Flash/Animate authoring environment.
 * Available since Flash CS4 Professional.
 */
interface SWFPanel {
    /**
     * Read-only. A string that represents the name of the specified Window SWF panel.
     *
     * @example
     * fl.trace(fl.swfPanels[0].name);
     */
    readonly name: string;

    /**
     * Read-only. A string that represents the full path to the SWF file used in the panel.
     *
     * @example
     * fl.trace(fl.swfPanels[0].path);
     */
    readonly path: string;

    /**
     * Read-only. A string containing the DPI scale factor (scaleX) for the panel.
     * Available since Adobe Animate.
     *
     * @example
     * fl.trace(fl.swfPanels[x].dpiScaleFactorX);
     */
    readonly dpiScaleFactorX: string;

    /**
     * Read-only. A string containing the DPI scale factor (scaleY) for the panel.
     * Available since Adobe Animate.
     *
     * @example
     * fl.trace(fl.swfPanels[x].dpiScaleFactorY);
     */
    readonly dpiScaleFactorY: string;

    /**
     * Calls a function exposed via ExternalInterface.addCallback() in the SWF panel.
     * Works in conjunction with ActionScript's ExternalInterface and MMExecute().
     *
     * @param request Arguments to pass to the ActionScript callback function.
     * @returns Either null or a string returned by the AS3 function (could be empty).
     *
     * @example
     * // In JSFL:
     * function callMyPanel(panelName, arg) {
     *   if (fl.swfPanels.length > 0) {
     *     for (x = 0; x < fl.swfPanels.length; x++) {
     *       if (fl.swfPanels[x].name == panelName) {
     *         fl.swfPanels[x].call("callMySWF ", arg);
     *         break;
     *       }
     *     }
     *   } else
     *     fl.trace("no panels");
     * }
     * documentClosedHandler = function () { callMyPanel("fileStatus", "Document Closed"); };
     * fl.addEventListener("documentClosed", documentClosedHandler);
     */
    call(request: string): string | null;

    /**
     * Reloads the content of the SWF panel.
     * Available since Flash Professional CC.
     *
     * @example
     * fl.swfPanels[0].reload();
     */
    reload(): void;

    /**
     * Sets keyboard focus to this SWF panel.
     * Available since Flash CS5.5 Professional.
     *
     * @example
     * // Before running:
     * // - Undock the Project panel
     * // - Open its Create File dialog
     * // - Click Stage and press Tab to remove focus
     * flash.getSwfPanel("Project").setFocus();
     * // Then press Tab — cursor appears in dialog
     */
    setFocus(): void;
}
