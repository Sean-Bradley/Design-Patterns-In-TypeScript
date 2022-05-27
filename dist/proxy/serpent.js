"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const leopard_1 = require("./leopard");
const lion_1 = require("./lion");
class Serpent {
    constructor() {
        // Proteus in the form of a Serpent
        this.name = 'Serpent';
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
        console.log(`I am the form of ${this.name}`);
    }
}
exports.default = Serpent;
