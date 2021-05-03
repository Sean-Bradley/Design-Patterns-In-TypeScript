"use strict";
// Bridge Pattern Concept Sample Code
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
var _implementer, _implementer_1;
class RefinedAbstractionA {
    constructor(implementer) {
        _implementer.set(this, void 0);
        __classPrivateFieldSet(this, _implementer, implementer);
    }
    method(value) {
        __classPrivateFieldGet(this, _implementer).method(value);
    }
}
_implementer = new WeakMap();
class RefinedAbstractionB {
    constructor(implementer) {
        _implementer_1.set(this, void 0);
        __classPrivateFieldSet(this, _implementer_1, implementer);
    }
    method(value) {
        __classPrivateFieldGet(this, _implementer_1).method(value);
    }
}
_implementer_1 = new WeakMap();
class ConcreteImplementerA {
    method(value) {
        console.log(value);
    }
}
class ConcreteImplementerB {
    method(value) {
        value.forEach((v) => console.log(v));
    }
}
// The Client
const VALUES = ['a', 'b', 'c'];
const REFINED_ABSTRACTION_A = new RefinedAbstractionA(new ConcreteImplementerA());
REFINED_ABSTRACTION_A.method(VALUES);
const REFINED_ABSTRACTION_B = new RefinedAbstractionB(new ConcreteImplementerB());
REFINED_ABSTRACTION_B.method(VALUES);
