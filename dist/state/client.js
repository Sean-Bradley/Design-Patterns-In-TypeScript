"use strict";
// The State Use Case Example
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
var _StateContext_state;
var ExampleState;
(function (ExampleState) {
    ExampleState["Initializing"] = "Initializing";
    ExampleState["Started"] = "Started";
    ExampleState["Running"] = "Running";
    ExampleState["Finished"] = "Finished";
})(ExampleState || (ExampleState = {}));
class StateContext {
    constructor() {
        _StateContext_state.set(this, void 0);
        __classPrivateFieldSet(this, _StateContext_state, ExampleState.Initializing, "f");
    }
    get state() {
        return __classPrivateFieldGet(this, _StateContext_state, "f");
    }
    set state(value) {
        switch (value) {
            case ExampleState.Started:
                this.request = Started.prototype.request;
                break;
            case ExampleState.Running:
                this.request = Running.prototype.request;
                break;
            case ExampleState.Finished:
                this.request = Finished.prototype.request;
                break;
        }
        __classPrivateFieldSet(this, _StateContext_state, value, "f");
    }
    request() {
        // Does nothing until state changes, when then
        // this method handle is reassigned to a different
        // concrete states request method
    }
}
_StateContext_state = new WeakMap();
class Started {
    // A ConcreteState Subclass
    request() {
        console.log(`I am now Started`);
    }
}
class Running {
    // A ConcreteState Subclass
    request() {
        console.log(`I am now Running`);
    }
}
class Finished {
    // A ConcreteState Subclass
    request() {
        console.log(`I am now Finished`);
    }
}
// The Client
const STATE_CONTEXT = new StateContext();
console.log('STATE_CONTEXT = ' + STATE_CONTEXT.state);
STATE_CONTEXT.state = ExampleState.Started;
STATE_CONTEXT.request();
STATE_CONTEXT.state = ExampleState.Running;
STATE_CONTEXT.request();
STATE_CONTEXT.state = ExampleState.Finished;
STATE_CONTEXT.request();
STATE_CONTEXT.state = ExampleState.Started;
STATE_CONTEXT.request();
STATE_CONTEXT.state = ExampleState.Running;
STATE_CONTEXT.request();
STATE_CONTEXT.state = ExampleState.Finished;
STATE_CONTEXT.request();
