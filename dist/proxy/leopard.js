"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lion_1 = require("./lion");
const serpent_1 = require("./serpent");
class Leopard {
    constructor() {
        // Proteus in the form of a Leopard
        this.name = 'Leopard';
    }
    tellMeTheFuture() {
        // Proteus will change to something random
        if (Math.floor(Math.random() * 2)) {
            Object.assign(this, new lion_1.default());
            this.tellMeTheFuture = lion_1.default.prototype.tellMeTheFuture;
            this.tellMeYourForm = lion_1.default.prototype.tellMeYourForm;
        }
        else {
            Object.assign(this, new serpent_1.default());
            this.tellMeTheFuture = serpent_1.default.prototype.tellMeTheFuture;
            this.tellMeYourForm = serpent_1.default.prototype.tellMeYourForm;
        }
    }
    tellMeYourForm() {
        console.log(`I am the form of ${this.name}`);
    }
}
exports.default = Leopard;
