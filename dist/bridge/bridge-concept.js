"use strict";
// Bridge Pattern Concept Sample Code
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
var _RefinedAbstractionA_implementer, _RefinedAbstractionB_implementer;
class RefinedAbstractionA {
    constructor(implementer) {
        _RefinedAbstractionA_implementer.set(this, void 0);
        __classPrivateFieldSet(this, _RefinedAbstractionA_implementer, implementer, "f");
    }
    method(value) {
        __classPrivateFieldGet(this, _RefinedAbstractionA_implementer, "f").method(value);
    }
}
_RefinedAbstractionA_implementer = new WeakMap();
class RefinedAbstractionB {
    constructor(implementer) {
        _RefinedAbstractionB_implementer.set(this, void 0);
        __classPrivateFieldSet(this, _RefinedAbstractionB_implementer, implementer, "f");
    }
    method(value) {
        __classPrivateFieldGet(this, _RefinedAbstractionB_implementer, "f").method(value);
    }
}
_RefinedAbstractionB_implementer = new WeakMap();
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
