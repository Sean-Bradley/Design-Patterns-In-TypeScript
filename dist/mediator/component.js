"use strict";
// Each component stays synchronized through a mediator
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
var _Component_mediator, _Component_name;
Object.defineProperty(exports, "__esModule", { value: true });
class Component {
    constructor(mediator, name) {
        _Component_mediator.set(this, void 0);
        _Component_name.set(this, void 0);
        __classPrivateFieldSet(this, _Component_mediator, mediator, "f");
        __classPrivateFieldSet(this, _Component_name, name, "f");
    }
    notify(message) {
        console.log(__classPrivateFieldGet(this, _Component_name, "f") + ': >>> Out >>> : ' + message);
        __classPrivateFieldGet(this, _Component_mediator, "f").notify(message, this);
    }
    receive(message) {
        console.log(__classPrivateFieldGet(this, _Component_name, "f") + ': <<< In <<< : ' + message);
    }
}
_Component_mediator = new WeakMap(), _Component_name = new WeakMap();
exports.default = Component;
