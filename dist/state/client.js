"use strict";
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
// The State Use Case Example
var StateUseCase;
(function (StateUseCase) {
    var _state;
    let State;
    (function (State) {
        State["Initializing"] = "Initializing";
        State["Started"] = "Started";
        State["Running"] = "Running";
        State["Finished"] = "Finished";
    })(State || (State = {}));
    class Context {
        constructor() {
            _state.set(this, void 0);
            __classPrivateFieldSet(this, _state, State.Initializing
            //this.request = Started.prototype.request
            );
            //this.request = Started.prototype.request
        }
        get state() {
            return __classPrivateFieldGet(this, _state);
        }
        set state(value) {
            switch (value) {
                case State.Started:
                    this.request = Started.prototype.request;
                    break;
                case State.Running:
                    this.request = Running.prototype.request;
                    break;
                case State.Finished:
                    this.request = Finished.prototype.request;
                    break;
            }
            __classPrivateFieldSet(this, _state, value);
        }
        request() {
            /* Does nothing until state changes, when then
            this method handle is reassigned to a different
            concrete states request method */
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
        // "A ConcreteState Subclass
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
    const CONTEXT = new Context();
    console.log("CONTEXT State = " + CONTEXT.state);
    CONTEXT.state = State.Started;
    CONTEXT.request();
    CONTEXT.state = State.Running;
    CONTEXT.request();
    CONTEXT.state = State.Finished;
    CONTEXT.request();
    CONTEXT.state = State.Started;
    CONTEXT.request();
    CONTEXT.state = State.Running;
    CONTEXT.request();
    CONTEXT.state = State.Finished;
    CONTEXT.request();
})(StateUseCase || (StateUseCase = {}));
