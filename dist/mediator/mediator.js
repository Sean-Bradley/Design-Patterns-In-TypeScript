"use strict";
// The Subject that all components will stay synchronized with
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
var _Mediator_components;
Object.defineProperty(exports, "__esModule", { value: true });
class Mediator {
    constructor() {
        // A Subject whose notify method is mediated
        _Mediator_components.set(this, void 0);
        __classPrivateFieldSet(this, _Mediator_components, new Set(), "f");
    }
    add(component) {
        // Add components
        __classPrivateFieldGet(this, _Mediator_components, "f").add(component);
    }
    notify(message, originator) {
        // Add components except for the originator component
        __classPrivateFieldGet(this, _Mediator_components, "f").forEach((component) => {
            if (component !== originator) {
                component.receive(message);
            }
        });
    }
}
_Mediator_components = new WeakMap();
exports.default = Mediator;
