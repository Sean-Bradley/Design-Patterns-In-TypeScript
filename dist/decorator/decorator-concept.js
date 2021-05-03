"use strict";
// Decorator Concept Sample Code
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
var _object;
class Component {
    method() {
        return 'Component Method';
    }
}
class Decorator {
    constructor(object) {
        _object.set(this, void 0);
        __classPrivateFieldSet(this, _object, object);
    }
    method() {
        return `Decorator Method(${__classPrivateFieldGet(this, _object).method()})`;
    }
}
_object = new WeakMap();
// The Client
const COMPONENT = new Component();
console.log(COMPONENT.method());
// The component can be decorated
const Decorated = new Decorator(COMPONENT);
console.log(Decorated.method());
// The decorated component can be decorated again
const Decorated2 = new Decorator(Decorated);
console.log(Decorated2.method());
