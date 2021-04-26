"use strict";
// The State Pattern Concept
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
var _stateHandles, _handle;
class Context {
    constructor() {
        // This is the object whose behavior will change
        _stateHandles.set(this, void 0);
        _handle.set(this, void 0);
        __classPrivateFieldSet(this, _stateHandles, [
            new ConcreteStateA(),
            new ConcreteStateB(),
            new ConcreteStateC(),
        ]);
        __classPrivateFieldSet(this, _handle, undefined);
    }
    request() {
        // A method of the state that dynamically changes which
        // class it uses depending on the value of self.handle
        __classPrivateFieldSet(this, _handle, __classPrivateFieldGet(this, _stateHandles)[Math.floor(Math.random() * 3)]);
        return __classPrivateFieldGet(this, _handle);
    }
}
_stateHandles = new WeakMap(), _handle = new WeakMap();
class ConcreteStateA {
    // A ConcreteState Subclass
    toString() {
        return 'I am ConcreteStateA';
    }
}
class ConcreteStateB {
    // A ConcreteState Subclass
    toString() {
        return 'I am ConcreteStateB';
    }
}
class ConcreteStateC {
    // A ConcreteState Subclass
    toString() {
        return 'I am ConcreteStateC';
    }
}
// The Client
const CONTEXT = new Context();
console.log(CONTEXT.request());
console.log(CONTEXT.request());
console.log(CONTEXT.request());
console.log(CONTEXT.request());
console.log(CONTEXT.request());
