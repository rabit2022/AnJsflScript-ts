import {Overload} from "../core/Overload";
import {createCaller} from "../runtime/createCaller";
import {OverloadFunction} from "./types";
import {RegistryAPI} from "../registry/Registry";
import {o} from "../operators/operators";

const root = new Overload()
const rootCaller = createCaller(root)

function overloadFactory(parent?: Overload) {
    return createCaller(new Overload(parent))
}


export const overload = Object.assign(
    overloadFactory,// overload().map
    rootCaller,//overload.map
    RegistryAPI,// overload.defineType
    {o}
) as unknown as OverloadFunction;
