import { Component } from "excalibur";
import { TiledObject } from "./tiled-object";
/**
 * @deprecated
 */
export declare class TiledObjectComponent extends Component<'ex.tiledobject'> {
    object: TiledObject;
    readonly type = "ex.tiledobject";
    constructor(object: TiledObject);
}
