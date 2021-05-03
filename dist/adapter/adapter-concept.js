"use strict";
// Adapter Concept Sample Code
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
var _classB;
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
        _classB.set(this, void 0);
        __classPrivateFieldSet(this, _classB, new ClassB());
    }
    methodA() {
        'calls the class b method_b instead';
        __classPrivateFieldGet(this, _classB).methodB();
    }
}
_classB = new WeakMap();
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
