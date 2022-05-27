"use strict";
// Adapter Concept Sample Code
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
var _ClassBAdapter_classB;
class ClassA {
    methodA() {
        console.log('method A');
    }
}
class ClassB {
    methodB() {
        console.log('method B');
    }
}
class ClassBAdapter {
    constructor() {
        // ClassB does not have a methodA, so we can create an adapter
        _ClassBAdapter_classB.set(this, void 0);
        __classPrivateFieldSet(this, _ClassBAdapter_classB, new ClassB(), "f");
    }
    methodA() {
        'calls the class b method_b instead';
        __classPrivateFieldGet(this, _ClassBAdapter_classB, "f").methodB();
    }
}
_ClassBAdapter_classB = new WeakMap();
// The Client
// Before the adapter I need to test the objects class to know which
// method to call.
const ITEMS = [new ClassA(), new ClassB()];
ITEMS.forEach((item) => {
    if (item instanceof ClassB) {
        item.methodB();
    }
    else {
        item.methodA();
    }
});
// After creating an adapter for ClassB I can reuse the same method
// signature as ClassA (preferred)
const ADAPTED = [new ClassA(), new ClassBAdapter()];
ADAPTED.forEach((item) => {
    item.methodA();
});
