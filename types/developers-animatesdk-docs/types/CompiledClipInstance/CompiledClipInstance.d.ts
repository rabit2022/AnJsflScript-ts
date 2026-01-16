import {Filter} from "../Filter/Filter";
import {BlendMode} from "../SymbolInstance/SymbolInstanceType";
import {Instance} from "../Instance/Instance";

/**
 * Represents an instance of a compiled clip symbol in Adobe Animate (formerly Flash).
 * A compiled clip is a movie clip converted to a compiled clip library item for performance.
 *
 * @extends Instance
 * @availability Flash MX 2004 and later
 */
export interface CompiledClipInstance extends Instance {
  // --- Accessibility Properties ---

  /**
   * Equivalent to the "Name" field in the Accessibility panel.
   * Screen readers read this name aloud to identify the object.
   *
   * @availability Flash MX 2004
   * @example
   * // Get the name of the object.
   * var theName = fl.getDocumentDOM().selection[0].accName;
   * // Set the name of the object.
   * fl.getDocumentDOM().selection[0].accName = 'Home Button';
   */
  accName: string;

  /**
   * Equivalent to the "Description" field in the Accessibility panel.
   * Read by screen readers to provide context.
   *
   * @availability Flash MX 2004
   * @example
   * // Get the description of the current selection.
   * var theDescription = fl.getDocumentDOM().selection[0].description;
   * // Set the description of the current selection.
   * fl.getDocumentDOM().selection[0].description = "This is compiled clip number 1";
   */
  description: string;

  /**
   * Equivalent to the "Shortcut" field in the Accessibility panel.
   * Read by screen readers. Not available for dynamic text fields.
   *
   * @availability Flash MX 2004
   * @example
   * // Get the shortcut key of the object.
   * var theShortcut = fl.getDocumentDOM().selection[0].shortcut;
   * // Set the shortcut key of the object.
   * fl.getDocumentDOM().selection[0].shortcut = "Ctrl+I";
   */
  shortcut: string;

  /**
   * Equivalent to the "Tab Index" field in the Accessibility panel.
   * Defines the order in which objects receive focus when the user presses Tab.
   *
   * @availability Flash MX 2004
   * @example
   * // Get the tabIndex of the object.
   * var theTabIndex = fl.getDocumentDOM().selection[0].tabIndex;
   * // Set the tabIndex of the object.
   * fl.getDocumentDOM().selection[0].tabIndex = 1;
   */
  tabIndex: number;

  /**
   * Enables or disables accessibility of the object.
   * - `true` → "Make Object Accessible" is **unchecked**
   * - `false` → "Make Object Accessible" is **checked**
   *
   * @availability Flash MX 2004
   * @example
   * // Query if the object is accessible.
   * var isSilent = fl.getDocumentDOM().selection[0].silent;
   * // Set the object to be accessible.
   * fl.getDocumentDOM().selection[0].silent = false;
   */
  silent: boolean;

  /**
   * Controls accessibility of child objects.
   * - `true` → "Make Child Objects Accessible" is **unchecked**
   * - `false` → "Make Child Objects Accessible" is **checked**
   *
   * @availability Flash MX 2004
   * @example
   * // Query if the children of the object are accessible.
   * var areChildrenAccessible = fl.getDocumentDOM().selection[0].forceSimple;
   * // Allow the children of the object to be accessible.
   * fl.getDocumentDOM().selection[0].forceSimple = false;
   */
  forceSimple: boolean;

  // --- Visual & Display Properties ---

  /**
   * Sets the blend mode of the instance.
   * Valid values: `"normal"`, `"layer"`, `"darken"`, `"multiply"`, `"lighten"`,
   * `"screen"`, `"overlay"`, `"hardlight"`, `"add"`, `"subtract"`, `"difference"`,
   * `"invert"`, `"alpha"`, `"erase"`.
   *
   * @availability Adobe Animate
   * @example
   * // If the blend mode is 'add', change it to 'subtract'
   * var blend = fl.getDocumentDOM().getTimeline().layers[0].frames[0].elements[0].blendMode;
   * fl.trace(blend);
   * if (blend == 'add') {
   *   fl.getDocumentDOM().getTimeline().layers[0].frames[0].elements[0].blendMode = 'subtract';
   * }
   */
  blendMode: BlendMode;

  /**
   * Specifies whether the instance is visible.
   * Equivalent to the "Visible" checkbox in the Property Inspector.
   *
   * @availability Adobe Animate
   * @example
   * // Change visible to false on currently selected symbol instance
   * fl.getDocumentDOM().selection[0].visible = false;
   */
  visible: boolean;

  /**
   * Indicates whether to enable runtime bitmap caching for performance optimization.
   *
   * @availability Adobe Animate
   * @example
   * fl.getDocumentDOM().getTimeline().layers[0].frames[0].elements[0].cacheAsBitmap = true;
   */
  cacheAsBitmap: boolean;

  /**
   * An array of Filter objects applied to the instance.
   * ⚠️ To modify filters, you must:
   * 1. Retrieve the array
   * 2. Modify filter properties
   * 3. Reassign the array back
   *
   * @availability Adobe Animate
   * @example
   * // Trace the name of the filter at index 0; if it's a glow filter, set its blurX to 100
   * var filterName = fl.getDocumentDOM().getTimeline().layers[0].frames[0].elements[0].filters[0].name;
   * fl.trace(filterName);
   * var filterArray = fl.getDocumentDOM().getTimeline().layers[0].frames[0].elements[0].filters;
   * if (filterName == 'glowFilter') {
   *   filterArray[0].blurX = 100;
   * }
   * fl.getDocumentDOM().getTimeline().layers[0].frames[0].elements[0].filters = filterArray;
   */
  filters: Filter[];

  // --- Color Effect Properties ---

  /**
   * Specifies the color effect mode.
   * Valid values: `"none"`, `"brightness"`, `"tint"`, `"alpha"`, `"advanced"`.
   *
   * @availability Adobe Animate
   * @example
   * // Change the colorMode of the first element in the first frame, top layer
   * fl.getDocumentDOM().getTimeline().layers[0].frames[0].elements[0].colorMode = 'advanced';
   */
  colorMode: 'none' | 'brightness' | 'tint' | 'alpha' | 'advanced';

  /**
   * Read-only. Returns the brightness value (–100 to 100) **only if** `colorMode === 'brightness'`.
   * Throws an error if used in other color modes.
   *
   * @availability Adobe Animate
   * @example
   * var elem = fl.getDocumentDOM().getTimeline().layers[0].frames[0].elements[0];
   * if (elem.colorMode == 'brightness') {
   *   fl.trace(elem.brightness);
   * }
   */
  readonly brightness: number;

  /**
   * Read-only. Returns the tint color **only if** `colorMode === 'tint'`.
   * Otherwise, accessing this property results in an error.
   *
   * @availability Adobe Animate
   * @example
   * var elem = fl.getDocumentDOM().getTimeline().layers[0].frames[0].elements[0];
   * if (elem.colorMode == 'tint') {
   *   fl.trace(elem.tintColor);
   *   fl.trace(elem.tintPercent);
   * }
   */
  readonly tintColor: Color;

  /**
   * Read-only. Returns the tint percentage (–100 to 100) **only if** `colorMode === 'tint'`.
   * Otherwise, accessing this property results in an error.
   *
   * @availability Adobe Animate
   * @example
   * var elem = fl.getDocumentDOM().getTimeline().layers[0].frames[0].elements[0];
   * if (elem.colorMode == 'tint') {
   *   fl.trace(elem.tintColor);
   *   fl.trace(elem.tintPercent);
   * }
   */
  readonly tintPercent: string; // Note: documented as string, though likely numeric

  // --- Advanced Color Adjustment (Additive) ---

  /**
   * Adjusts red channel by a constant amount (–255 to 255). Added to current value.
   * Equivalent to "Advanced" color settings (right-side controls).
   *
   * @availability Adobe Animate
   * @example
   * // Change the colorRedAmount of the first element in the first frame, top layer
   * fl.getDocumentDOM().getTimeline().layers[0].frames[0].elements[0].colorRedAmount = 100;
   * // Change the colorRedAmount of the selected symbol instance
   * fl.getDocumentDOM().selection[0].colorRedAmount = 255;
   */
  colorRedAmount: number;

  /**
   * Adjusts green channel by a constant amount (–255 to 255). Added to current value.
   *
   * @availability Adobe Animate
   * @example
   * fl.getDocumentDOM().getTimeline().layers[0].frames[0].elements[0].colorGreenAmount = 100;
   * fl.getDocumentDOM().selection[0].colorGreenAmount = 255;
   */
  colorGreenAmount: number;

  /**
   * Adjusts blue channel by a constant amount (–255 to 255). Added to current value.
   *
   * @availability Adobe Animate
   * @example
   * fl.getDocumentDOM().getTimeline().layers[0].frames[0].elements[0].colorBlueAmount = 100;
   * fl.getDocumentDOM().selection[0].colorBlueAmount = 255;
   */
  colorBlueAmount: number;

  /**
   * Adjusts alpha/tint by a constant amount (–255 to 255). Added to current value.
   * Most useful when combined with `colorAlphaPercent`.
   *
   * @availability Adobe Animate
   * @example
   * fl.getDocumentDOM().getTimeline().layers[0].frames[0].elements[0].colorAlphaAmount = 100;
   * fl.getDocumentDOM().selection[0].colorAlphaAmount = -100;
   */
  colorAlphaAmount: number;

  // --- Advanced Color Adjustment (Multiplicative) ---

  /**
   * Adjusts red channel by a percentage (–100 to 100). Current value is multiplied by this percent.
   *
   * @availability Adobe Animate
   * @example
   * fl.getDocumentDOM().getTimeline().layers[0].frames[0].elements[0].colorRedPercent = 100;
   * fl.getDocumentDOM().selection[0].colorRedPercent = 80;
   */
  colorRedPercent: number;

  /**
   * Adjusts green channel by a percentage (–100 to 100).
   *
   * @availability Adobe Animate
   * @example
   * fl.getDocumentDOM().getTimeline().layers[0].frames[0].elements[0].colorGreenPercent = 100;
   * fl.getDocumentDOM().selection[0].colorGreenPercent = 80;
   */
  colorGreenPercent: number;

  /**
   * Adjusts blue channel by a percentage (–100 to 100).
   *
   * @availability Adobe Animate
   * @example
   * fl.getDocumentDOM().getTimeline().layers[0].frames[0].elements[0].colorBluePercent = 100;
   * fl.getDocumentDOM().selection[0].colorBluePercent = 80;
   */
  colorBluePercent: number;

  /**
   * Adjusts alpha/tint by a percentage (–100 to 100). Current value is multiplied by this percent.
   *
   * @availability Adobe Animate
   * @example
   * fl.getDocumentDOM().getTimeline().layers[0].frames[0].elements[0].colorAlphaPercent = -100;
   * fl.getDocumentDOM().selection[0].colorAlphaPercent = 90;
   */
  colorAlphaPercent: number;

  // --- Background & Matte ---

  /**
   * Specifies the matte (background fill) color when the instance is set to "Opaque".
   * Format: hexadecimal string (`"#rrggbb"`) or integer.
   *
   * @availability Adobe Animate
   * @example
   * var bitmapInstance = fl.getDocumentDOM().getTimeline().layers[0].frames[0].elements[0];
   * bitmapInstance.backgroundColor = "#000000";
   */
  backgroundColor: string | number;

  /**
   * Controls how the background is rendered:
   * - `true` → Use 32-bit with alpha (transparent background)
   * - `false` → Use solid background color (`backgroundColor`)
   *
   * @availability Adobe Animate
   * @example
   * fl.getDocumentDOM().getTimeline().layers[0].frames[0].elements[0].useBackgroundColor = true;
   */
  useBackgroundColor: boolean;

  // --- Dropped Properties ---

  /**
   * ⚠️ DROPPED in Adobe Animate.
   * Previously held ActionScript code attached to the instance (e.g., `on(click){...}`).
   *
   * @deprecated Dropped in Adobe Animate. Only available in Flash MX 2004.
   * @availability Flash MX 2004 (dropped in Adobe Animate)
   * @example
   * // Assign some ActionScript to a specified Button compiled clip instance.
   * fl.getDocumentDOM().getTimeline().layers[0].frames[0].elements[0].actionScript = "on(click) {trace('button is clicked');}";
   * // Assign some ActionScript to the currently selected Button compiled clip instance.
   * fl.getDocumentDOM().selection[0].actionScript = "on(click) {trace('button is clicked');}";
   */
  actionScript: string;
}


/**
 * Represents a color in Adobe Animate (exact structure not specified in docs).
 * Typically has r, g, b properties or similar.
 */
interface Color {
  // e.g., r: number; g: number; b: number;
  [key: string]: any;
}

