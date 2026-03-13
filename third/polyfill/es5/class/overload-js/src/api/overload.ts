/**
 * @file: overload.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/2/8 23:32
 * @project: AnJsflScript-ts
 * @description:
 */

import { Overload } from "../core/Overload";
import { createCaller } from "../runtime/createCaller";
import { OverloadFunction } from "./types";
import { RegistryAPI } from "../registry/Registry";
import { o } from "../operators/operators";

const root = new Overload();
const rootCaller = createCaller(root);

function overloadFactory(parent?: Overload) {
    return createCaller(new Overload(parent));
}

export const overload = Object.assign(
    overloadFactory, // overload().map
    rootCaller, //overload.map
    RegistryAPI, // overload.defineType
    { o }
) as unknown as OverloadFunction;
