"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _name;
Object.defineProperty(exports, "__esModule", { value: true });
const leopard_1 = require("./leopard");
const lion_1 = require("./lion");
class Serpent {
    constructor() {
        // Proteus in the form of a Serpent
        _name.set(this, 'Serpent');
    }
    tellMeTheFuture() {
        // Proteus will change to something random
        if (Math.floor(Math.random() * 2)) {
            Object.assign(this, new leopard_1.default());
            this.tellMeTheFuture = leopard_1.default.prototype.tellMeTheFuture;
            this.tellMeYourForm = leopard_1.default.prototype.tellMeYourForm;
        }
        else {
            Object.assign(this, new lion_1.default());
            this.tellMeTheFuture = lion_1.default.prototype.tellMeTheFuture;
            this.tellMeYourForm = lion_1.default.prototype.tellMeYourForm;
        }
    }
    tellMeYourForm() {
        console.log(`I am the form of ${__classPrivateFieldGet(this, _name)}`);
    }
}
exports.default = Serpent;
_name = new WeakMap();
