import {SymbolInstance} from "../SymbolInstance/SymbolInstance";

/**
 * Represents a component instance on the Flash/Animate timeline.
 * Components are special symbol types that expose configurable properties via the Property Inspector.
 *
 * @extends SymbolInstance
 * @availability Flash MX 2004 and later
 */
export interface ComponentInstance extends SymbolInstance {
  /**
   * A read-only array of ActionScript 2.0 properties that are exposed by this component
   * and accessible via the Component Property Inspector.
   * Each element is a {@link Parameter} object representing a configurable property (e.g., label, value, enabled).
   *
   * ⚠️ This property is read-only — you cannot assign a new array to it.
   * However, you can modify the `.value` of individual parameters within the array.
   *
   * @availability Flash MX 2004
   * @example
   * // Get the parameters of the first selected component instance
   * var parms = fl.getDocumentDOM().selection[0].parameters;
   * // Set the value of the first parameter
   * parms[0].value = "some value";
   *
   * @see Parameter
   */
  readonly parameters: Parameter[];
}

// --- Supporting Type: Parameter ---
/**
 * Represents a single configurable property of a component instance.
 * Used in the {@link ComponentInstance.parameters} array.
 */
interface Parameter {
  /**
   * The name of the parameter (e.g., "label", "value", "enabled").
   */
  name: string;

  /**
   * The current value of the parameter. Type varies (string, number, boolean, etc.).
   * This is the property you typically modify to configure a component.
   */
  value: any;

  // Note: Full structure of Parameter not provided in your docs,
  // so only essential fields are declared.
  [key: string]: any;
}
