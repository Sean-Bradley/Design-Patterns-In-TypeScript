"use strict";
// Decorator Concept Sample Code
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
var _Decorator_object;
class Component {
    method() {
        return 'Component Method';
    }
}
class Decorator {
    constructor(object) {
        _Decorator_object.set(this, void 0);
        __classPrivateFieldSet(this, _Decorator_object, object, "f");
    }
    method() {
        return `Decorator Method(${__classPrivateFieldGet(this, _Decorator_object, "f").method()})`;
    }
}
_Decorator_object = new WeakMap();
// The Client
const COMPONENT = new Component();
console.log(COMPONENT.method());
// The component can be decorated
const Decorated = new Decorator(COMPONENT);
console.log(Decorated.method());
// The decorated component can be decorated again
const Decorated2 = new Decorator(Decorated);
console.log(Decorated2.method());
