"use strict";
// The State Pattern Concept
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
var _Context_stateHandles, _Context_handle;
class Context {
    constructor() {
        // This is the object whose behavior will change
        _Context_stateHandles.set(this, void 0);
        _Context_handle.set(this, void 0);
        __classPrivateFieldSet(this, _Context_stateHandles, [
            new ConcreteStateA(),
            new ConcreteStateB(),
            new ConcreteStateC(),
        ], "f");
        __classPrivateFieldSet(this, _Context_handle, undefined, "f");
    }
    request() {
        // A method of the state that dynamically changes which
        // class it uses depending on the value of self.handle
        __classPrivateFieldSet(this, _Context_handle, __classPrivateFieldGet(this, _Context_stateHandles, "f")[Math.floor(Math.random() * 3)], "f");
        return __classPrivateFieldGet(this, _Context_handle, "f");
    }
}
_Context_stateHandles = new WeakMap(), _Context_handle = new WeakMap();
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
