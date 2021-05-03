"use strict";
// A Circle Abstraction
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
var _implementer;
Object.defineProperty(exports, "__esModule", { value: true });
class Circle {
    constructor(implementer) {
        _implementer.set(this, void 0);
        __classPrivateFieldSet(this, _implementer, implementer);
    }
    draw() {
        __classPrivateFieldGet(this, _implementer).drawImplementation();
    }
}
exports.default = Circle;
_implementer = new WeakMap();
