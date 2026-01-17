/**
 * Interface for the Components Panel object in Adobe Flash.
 */
interface ComponentsPanel {
    /**
     * Adds the specified component to the currently active document at the specified position.
     *
     * > ⚠️ **Note**: The `position` is relative to the **center point** of the component,
     * > not its registration/origin point.
     *
     * @param position - A point object `{x: number, y: number}` specifying where to place the component.
     * @param categoryName - The name of the component category as it appears in the Components panel
     *                       (e.g., `"User Interface"`, `"Data"`).
     * @param componentName - The exact name of the component within the category
     *                        (e.g., `"Button"`, `"CheckBox"`, `"WebServiceConnector"`).
     *
     * @returns void
     *
     * @example
     * ```javascript
     * fl.componentsPanel.addItemToDocument({x:0, y:0}, "User Interface", "CheckBox");
     * fl.componentsPanel.addItemToDocument({x:0, y:100}, "Data", "WebServiceConnector");
     * fl.componentsPanel.addItemToDocument({x:0, y:200}, "User Interface", "Button");
     * ```
     */
    addItemToDocument(
        position: FlashPoint,
        categoryName: string,
        componentName: string
    ): void;

    /**
     * Refreshes (reloads) the Components panel's list of available components.
     *
     * This is useful after installing new components or modifying the component library,
     * so that the panel reflects the latest state.
     *
     * @returns boolean - `true` if the panel was successfully refreshed; `false` otherwise.
     *
     * @example
     * ```javascript
     * // Refreshes the Components panel:
     * var success = fl.componentsPanel.reload();
     * if (success) {
     *   fl.trace("Components panel reloaded successfully.");
     * }
     * ```
     */
    reload(): boolean;
}