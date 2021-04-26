"use strict";
// The State Use Case Example
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
var _state;
var ExampleState;
(function (ExampleState) {
    ExampleState["Initializing"] = "Initializing";
    ExampleState["Started"] = "Started";
    ExampleState["Running"] = "Running";
    ExampleState["Finished"] = "Finished";
})(ExampleState || (ExampleState = {}));
class StateContext {
    constructor() {
        _state.set(this, void 0);
        __classPrivateFieldSet(this, _state, ExampleState.Initializing);
    }
    get state() {
        return __classPrivateFieldGet(this, _state);
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
        __classPrivateFieldSet(this, _state, value);
    }
    request() {
        // Does nothing until state changes, when then
        // this method handle is reassigned to a different
        // concrete states request method
    }
}
_state = new WeakMap();
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
