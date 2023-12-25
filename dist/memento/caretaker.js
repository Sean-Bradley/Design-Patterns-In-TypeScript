"use strict";
// The Save/Restore Game functionality
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
var _CareTaker_originator, _CareTaker_mementos;
Object.defineProperty(exports, "__esModule", { value: true });
class CareTaker {
    constructor(originator) {
        // Guardian. Provides a narrow interface to the mementos
        _CareTaker_originator.set(this, void 0);
        _CareTaker_mementos.set(this, void 0);
        __classPrivateFieldSet(this, _CareTaker_originator, originator, "f");
        __classPrivateFieldSet(this, _CareTaker_mementos, [], "f");
    }
    save() {
        // Store a new Memento of the Characters current state
        console.log('CareTaker: Game Save');
        const memento = __classPrivateFieldGet(this, _CareTaker_originator, "f").memento;
        __classPrivateFieldGet(this, _CareTaker_mementos, "f").push(memento);
    }
    restore(index) {
        // Replace the Characters current attributes with the state
        // stored in the saved Memento
        console.log('CareTaker: Restoring Characters attributes from Memento');
        const memento = __classPrivateFieldGet(this, _CareTaker_mementos, "f")[index];
        __classPrivateFieldGet(this, _CareTaker_originator, "f").memento = memento;
    }
}
_CareTaker_originator = new WeakMap(), _CareTaker_mementos = new WeakMap();
exports.default = CareTaker;
