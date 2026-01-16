import {BitmapRenderMode, BlendMode, ColorMode, Loop, SymbolType} from "./SymbolInstanceType";
import {Instance} from "../Instance/Instance";
import {Filter} from "../Filter/Filter";

/**
 * Represents a symbol instance on the timeline.
 * SymbolInstance is a subclass of the Instance object.
 *
 * @see Instance
 */
export interface SymbolInstance extends Instance {
  // --- Accessibility Properties (Not available for graphic symbols) ---

  /**
   * A string equivalent to the Name field in the Accessibility panel.
   * Screen readers identify objects by reading this name aloud.
   *
   * **Not available for graphic symbols.**
   *
   * @example
   * // Get the accessibility name
   * var theName = fl.getDocumentDOM().selection[0].accName;
   *
   * // Set the accessibility name
   * fl.getDocumentDOM().selection[0].accName = "Home Button";
   */
  accName: string;

  /**
   * A string equivalent to the Description field in the Accessibility panel.
   * The description is read by the screen reader.
   *
   * **Not available for graphic symbols.**
   *
   * @example
   * // Get the description
   * var theDescription = fl.getDocumentDOM().selection[0].description;
   *
   * // Set the description
   * fl.getDocumentDOM().selection[0].description = "Click the home button to go to home";
   */
  description: string;

  /**
   * A string equivalent to the shortcut key associated with the symbol in the Accessibility panel.
   * This key is read by screen readers.
   *
   * **Not available for graphic symbols.**
   *
   * @example
   * // Get the shortcut
   * var theShortcut = fl.getDocumentDOM().selection[0].shortcut;
   *
   * // Set the shortcut
   * fl.getDocumentDOM().selection[0].shortcut = "Ctrl+i";
   */
  shortcut: string;

  /**
   * An integer equivalent to the Tab index field in the Accessibility panel.
   * Creates a tab order for keyboard navigation.
   *
   * **Not available for graphic symbols.**
   *
   * @example
   * var mySymbol = fl.getDocumentDOM().selection[0];
   * mySymbol.tabIndex = 3;
   * fl.trace(mySymbol.tabIndex);
   */
  tabIndex: number;

  /**
   * A boolean that enables or disables the accessibility of the object itself.
   * Equivalent to the inverse of the "Make Object Accessible" setting.
   * - `true` means the object is **not** accessible (silent).
   * - `false` means the object **is** accessible.
   *
   * **Not available for graphic symbols.**
   *
   * @example
   * // Check if the object is accessible (false means accessible)
   * var isSilent = fl.getDocumentDOM().selection[0].silent;
   *
   * // Make the object accessible
   * fl.getDocumentDOM().selection[0].silent = false;
   */
  silent: boolean;

  /**
   * A boolean that enables/disables accessibility of the object's children.
   * Equivalent to the inverse of the "Make Child Objects Accessible" setting.
   * - `true` means children are **not** accessible.
   * - `false` means children **are** accessible.
   *
   * **Available only for MovieClip objects.**
   *
   * @example
   * // Check if children are accessible (false means they are)
   * var areChildrenAccessible = fl.getDocumentDOM().selection[0].forceSimple;
   *
   * // Allow children to be accessible
   * fl.getDocumentDOM().selection[0].forceSimple = false;
   */
  forceSimple: boolean;

  // --- Core Symbol Properties ---

  /**
   * A string specifying the type of symbol.
   * Equivalent to the "Behavior" in the symbol creation dialog.
   * Acceptable values: "button", "movie clip", "graphic".
   *
   * @example
   * fl.getDocumentDOM().getTimeline().layers[0].frames[0].elements[0].symbolType = "graphic";
   */
  symbolType: SymbolType;

  /**
   * A boolean specifying whether the instance is visible (`true`) or hidden (`false`).
   *
   * @example
   * fl.getDocumentDOM().getTimeline().layers[0].frames[0].elements[0].visible = false;
   */
  visible: boolean;

  // --- Graphic Symbol Specific Properties ---

  /**
   * A zero-based integer specifying the first frame to appear in the timeline of a graphic symbol.
   * Sets the same property as the "First" field in the Property inspector.
   *
   * **Applies only to graphic symbols. Undefined for others.**
   *
   * @example
   * fl.getDocumentDOM().getTimeline().layers[0].frames[0].elements[0].firstFrame = 10;
   */
  firstFrame: number | undefined;

  /**
   * 帧选择器
   * 动画的结束帧,默认为-1,表示播放到最后一帧
   * @type {number}
   */
  lastFrame:number;

  /**
   * A string that sets the loop behavior for graphic symbols.
   * Acceptable values: "loop", "play once", "single frame".
   *
   * **For non-graphic symbols, this property is undefined.**
   *
   * @example
   * fl.getDocumentDOM().getTimeline().layers[0].frames[0].elements[0].loop = 'single frame';
   */
  loop: Loop;

  // --- Button Symbol Specific Properties ---

  /**
   * A string that sets the button tracking mode for button symbols.
   * Acceptable values: "button", "menu".
   *
   * **For non-button symbols, this property is ignored.**
   *
   * @example
   * fl.getDocumentDOM().getTimeline().layers[0].frames[0].elements[0].buttonTracking = "menu";
   */
  buttonTracking: 'button' | 'menu';

  // --- Color Effects Properties ---

  /**
   * A string specifying the color mode from the Color pop-up menu.
   * Acceptable values: "none", "brightness", "tint", "alpha", "advanced".
   *
   * @example
   * fl.getDocumentDOM().getTimeline().layers[0].frames[0].elements[0].colorMode = "alpha";
   */
  colorMode: ColorMode;

  /**
   * Read-only property; returns the brightness percentage (-100 to 100) **only when `colorMode == 'brightness'`**.
   * Accessing this property in other modes results in an error.
   *
   * @example
   * var elem = fl.getDocumentDOM().getTimeline().layers[0].frames[0].elements[0];
   * if (elem.colorMode == 'brightness') {
   *     fl.trace(elem.brightness);
   * }
   */
  readonly brightness: number;

  /**
   * Read-only property; returns the tint color **only when `colorMode == 'tint'`**.
   * Otherwise, accessing this property results in an error.
   *
   * @example
   * var elem = fl.getDocumentDOM().getTimeline().layers[0].frames[0].elements[0];
   * if (elem.colorMode == 'tint') {
   *     fl.trace(elem.tintColor);
   *     fl.trace(elem.tintPercent);
   * }
   */
  readonly tintColor: string;

  /**
   * Read-only property; returns the tint percentage (-100 to 100) **only when `colorMode == 'tint'`**.
   * Otherwise, accessing this property results in an error.
   *
   * @example
   * var elem = fl.getDocumentDOM().getTimeline().layers[0].frames[0].elements[0];
   * if (elem.colorMode == 'tint') {
   *     fl.trace(elem.tintColor);
   *     fl.trace(elem.tintPercent);
   * }
   */
  readonly tintPercent: number;

  // --- Advanced Color Effect Properties (for `colorMode == 'advanced'`) ---

  /**
   * Part of the advanced color transformation. Specifies the red percentage (-100 to 100).
   * Equivalent to the left percentage control for Red in the Advanced Color Effect dialog.
   *
   * @example
   * fl.getDocumentDOM().selection[0].colorRedPercent = 10;
   */
  colorRedPercent: number; // -100 to 100

  /**
   * Part of the advanced color transformation. Specifies the green percentage (-100 to 100).
   * Equivalent to the left percentage control for Green in the Advanced Color Effect dialog.
   *
   * @example
   * fl.getDocumentDOM().selection[0].colorGreenPercent = 70;
   */
  colorGreenPercent: number; // -100 to 100

  /**
   * Part of the advanced color transformation. Specifies the blue percentage (-100 to 100).
   * Equivalent to the left percentage control for Blue in the Advanced Color Effect dialog.
   *
   * @example
   * fl.getDocumentDOM().selection[0].colorBluePercent = 80;
   */
  colorBluePercent: number; // -100 to 100

  /**
   * Part of the advanced color transformation. Specifies the alpha percentage (-100 to 100).
   * Equivalent to the left percentage control for Alpha in the Advanced Color Effect dialog.
   *
   * @example
   * fl.getDocumentDOM().selection[0].colorAlphaPercent = 80;
   */
  colorAlphaPercent: number; // -100 to 100

  /**
   * Part of the advanced color transformation. Specifies the red amount (-255 to 255).
   * Equivalent to the right constant control for Red in the Advanced Color Effect dialog.
   *
   * @example
   * fl.getDocumentDOM().selection[0].colorRedAmount = 255;
   */
  colorRedAmount: number; // -255 to 255

  /**
   * Part of the advanced color transformation. Specifies the green amount (-255 to 255).
   * Equivalent to the right constant control for Green in the Advanced Color Effect dialog.
   *
   * @example
   * fl.getDocumentDOM().selection[0].colorGreenAmount = -100;
   */
  colorGreenAmount: number; // -255 to 255

  /**
   * Part of the advanced color transformation. Specifies the blue amount (-255 to 255).
   * Equivalent to the right constant control for Blue in the Advanced Color Effect dialog.
   *
   * @example
   * fl.getDocumentDOM().selection[0].colorBlueAmount = 50;
   */
  colorBlueAmount: number; // -255 to 255

  /**
   * Part of the advanced color transformation. Specifies the alpha amount (-255 to 255).
   * Equivalent to the right constant control for Alpha in the Advanced Color Effect dialog.
   *
   * @example
   * fl.getDocumentDOM().selection[0].colorAlphaAmount = -100;
   */
  colorAlphaAmount: number; // -255 to 255

  // --- Rendering & Display Properties ---

  /**
   * A boolean that specifies whether run-time bitmap caching is enabled.
   *
   * **Note:** Starting with Flash Professional CS5.5, use `bitmapRenderMode` instead.
   *
   * @example
   * fl.getDocumentDOM().getTimeline().layers[0].frames[0].elements[0].cacheAsBitmap = true;
   */
  cacheAsBitmap: boolean;

  /**
   * A string that sets the display type for the symbol.
   * Acceptable values:
   * - "none"
   * - "cache" (cached as bitmap at runtime)
   * - "export" (exported as bitmap in SWF)
   *
   * This property supersedes `cacheAsBitmap`.
   *
   * @example
   * var symbol = fl.getDocumentDOM().selection[0];
   * symbol.bitmapRenderMode = "export";
   */
  bitmapRenderMode: BitmapRenderMode;

  /**
   * A string specifying the matte color when Opaque is selected.
   * Must be in hexadecimal #rrggbb format.
   * Used when `useBackgroundColor` is true.
   *
   * @example
   * var bitmapInstance = fl.getDocumentDOM().getTimeline().layers[0].frames[0].elements[0];
   * bitmapInstance.backgroundColor = "#000000";
   */
  backgroundColor: string; // e.g., "#FF0000"

  /**
   * A boolean that specifies whether to use 24-bit mode (`true`) or 32-bit mode with alpha (`false`).
   * If `true`, the `backgroundColor` is used.
   *
   * @example
   * fl.getDocumentDOM().getTimeline().layers[0].frames[0].elements[0].useBackgroundColor = true;
   */
  useBackgroundColor: boolean;

  /**
   * A string that specifies the blending mode for a movie clip symbol.
   * Acceptable values include: "normal", "multiply", "screen", "overlay", "hardlight",
   * "lighten", "darken", "difference", "add", "subtract", "invert", "alpha", "erase".
   *
   * @example
   * fl.getDocumentDOM().getTimeline().layers[0].frames[0].elements[0].blendMode = "add";
   */
  blendMode: BlendMode;

  // --- Filters ---

  /**
   * An array of Filter objects applied to the instance.
   * To modify filters, retrieve the array, change properties, and reassign it.
   *
   * @example
   * var filterArray = fl.getDocumentDOM().getTimeline().layers[0].frames[0].elements[0].filters;
   * if (filterArray[0].name == 'glowFilter') {
   *     filterArray[0].blurX = 100;
   * }
   * fl.getDocumentDOM().getTimeline().layers[0].frames[0].elements[0].filters = filterArray;
   */
  filters: Filter[];

  // --- 3D Properties ---

  /**
   * Read-only property; a boolean indicating whether the instance contains any 3D transforms.
   *
   * @example
   * fl.trace("the instance contains a 3D matrix: " + fl.getDocumentDOM().selection[0].is3D);
   */
  readonly is3D: boolean;

  // --- Deprecated / Dropped Properties ---

  /**
   * **Dropped in Adobe Animate.**
   * A string that specified actions assigned to movie clip or button instances.
   * For graphic symbols, this returned `undefined`.
   *
   * **This property is no longer functional.**
   *
   * @deprecated
   * @example
   * // This will not work in Adobe Animate
   * fl.getDocumentDOM().getTimeline().layers[0].frames[0].elements[0].actionScript = "onClipEvent(enterFrame) {...}";
   */
  actionScript: string | undefined;
}