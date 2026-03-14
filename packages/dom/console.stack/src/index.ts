import "./console";
import "./table";
import "./stack";
import {EnhancedConsole} from "./global/console";

if (typeof window.console === "undefined") {
    window.console = EnhancedConsole;
}

// import * as console from "console";
export * from "./console";
export {table} from "./table";
export {stack} from "./stack";