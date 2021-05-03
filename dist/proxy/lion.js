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
const serpent_1 = require("./serpent");
class Lion {
    constructor() {
        // Proteus in the form of a Lion
        _name.set(this, 'Lion');
    }
    tellMeTheFuture() {
        // Proteus will change to something random
        if (Math.floor(Math.random() * 2)) {
            Object.assign(this, new serpent_1.default());
            this.tellMeTheFuture = serpent_1.default.prototype.tellMeTheFuture;
            this.tellMeYourForm = serpent_1.default.prototype.tellMeYourForm;
        }
        else {
            Object.assign(this, new leopard_1.default());
            this.tellMeTheFuture = leopard_1.default.prototype.tellMeTheFuture;
            this.tellMeYourForm = leopard_1.default.prototype.tellMeYourForm;
        }
    }
    tellMeYourForm() {
        console.log(`I am the form of ${__classPrivateFieldGet(this, _name)}`);
    }
}
exports.default = Lion;
_name = new WeakMap();
