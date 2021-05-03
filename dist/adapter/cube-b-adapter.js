"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _cube;
Object.defineProperty(exports, "__esModule", { value: true });
const cube_b_1 = require("./cube-b");
class CubeBAdapter {
    constructor() {
        _cube.set(this, void 0);
        __classPrivateFieldSet(this, _cube, new cube_b_1.default());
    }
    manufacture(width, height, depth) {
        const success = __classPrivateFieldGet(this, _cube).create([0 - width / 2, 0 - height / 2, 0 - depth / 2], [0 + width / 2, 0 + height / 2, 0 + depth / 2]);
        return success;
    }
}
exports.default = CubeBAdapter;
_cube = new WeakMap();
