"use strict";
// The Subject that all components will stay synchronized with
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
var _components;
Object.defineProperty(exports, "__esModule", { value: true });
class Mediator {
    constructor() {
        // A Subject whose notify method is mediated
        _components.set(this, void 0);
        __classPrivateFieldSet(this, _components, new Set());
    }
    add(component) {
        // Add components
        __classPrivateFieldGet(this, _components).add(component);
    }
    notify(message, originator) {
        // Add components except for the originator component
        __classPrivateFieldGet(this, _components).forEach((component) => {
            if (component !== originator) {
                component.receive(message);
            }
        });
    }
}
exports.default = Mediator;
_components = new WeakMap();
