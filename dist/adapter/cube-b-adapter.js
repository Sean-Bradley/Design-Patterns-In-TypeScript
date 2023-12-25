"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _CubeBAdapter_cube;
Object.defineProperty(exports, "__esModule", { value: true });
const cube_b_1 = require("./cube-b");
class CubeBAdapter {
    constructor() {
        _CubeBAdapter_cube.set(this, void 0);
        __classPrivateFieldSet(this, _CubeBAdapter_cube, new cube_b_1.default(), "f");
    }
    manufacture(width, height, depth) {
        const success = __classPrivateFieldGet(this, _CubeBAdapter_cube, "f").create([0 - width / 2, 0 - height / 2, 0 - depth / 2], [0 + width / 2, 0 + height / 2, 0 + depth / 2]);
        return success;
    }
}
_CubeBAdapter_cube = new WeakMap();
exports.default = CubeBAdapter;
