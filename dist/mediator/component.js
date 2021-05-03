"use strict";
// Each component stays synchronized through a mediator
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
var _mediator, _name;
Object.defineProperty(exports, "__esModule", { value: true });
class Component {
    constructor(mediator, name) {
        _mediator.set(this, void 0);
        _name.set(this, void 0);
        __classPrivateFieldSet(this, _mediator, mediator);
        __classPrivateFieldSet(this, _name, name);
    }
    notify(message) {
        console.log(__classPrivateFieldGet(this, _name) + ': >>> Out >>> : ' + message);
        __classPrivateFieldGet(this, _mediator).notify(message, this);
    }
    receive(message) {
        console.log(__classPrivateFieldGet(this, _name) + ': <<< In <<< : ' + message);
    }
}
exports.default = Component;
_mediator = new WeakMap(), _name = new WeakMap();
