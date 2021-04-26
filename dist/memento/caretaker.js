"use strict";
// The Save/Restore Game functionality
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
var _originator, _mementos;
Object.defineProperty(exports, "__esModule", { value: true });
class CareTaker {
    constructor(originator) {
        // Guardian. Provides a narrow interface to the mementos
        _originator.set(this, void 0);
        _mementos.set(this, void 0);
        __classPrivateFieldSet(this, _originator, originator);
        __classPrivateFieldSet(this, _mementos, []);
    }
    save() {
        // Store a new Memento of the Characters current state
        console.log('CareTaker: Game Save');
        const memento = __classPrivateFieldGet(this, _originator).memento;
        __classPrivateFieldGet(this, _mementos).push(memento);
    }
    restore(index) {
        // Replace the Characters current attributes with the state
        // stored in the saved Memento
        console.log('CareTaker: Restoring Characters attributes from Memento');
        const memento = __classPrivateFieldGet(this, _mementos)[index];
        __classPrivateFieldGet(this, _originator).memento = memento;
    }
}
exports.default = CareTaker;
_originator = new WeakMap(), _mementos = new WeakMap();
