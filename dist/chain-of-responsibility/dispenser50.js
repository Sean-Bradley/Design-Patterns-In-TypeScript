"use strict";
// A dispenser of £50 notes
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
var _Dispenser50_successor;
Object.defineProperty(exports, "__esModule", { value: true });
class Dispenser50 {
    constructor() {
        // Dispenses £10s if applicable, otherwise continues to next successor
        _Dispenser50_successor.set(this, void 0);
    }
    nextSuccessor(successor) {
        // Set the next successor
        __classPrivateFieldSet(this, _Dispenser50_successor, successor, "f");
    }
    handle(amount) {
        // Handle the dispensing of notes"
        if (amount >= 50) {
            const num = Math.floor(amount / 50);
            const remainder = amount % 50;
            console.log(`Dispensing ${num} £50 note`);
            if (remainder !== 0) {
                __classPrivateFieldGet(this, _Dispenser50_successor, "f").handle(remainder);
            }
        }
        else {
            __classPrivateFieldGet(this, _Dispenser50_successor, "f").handle(amount);
        }
    }
}
exports.default = Dispenser50;
_Dispenser50_successor = new WeakMap();
