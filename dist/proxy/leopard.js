"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lion_1 = require("./lion");
const serpent_1 = require("./serpent");
class Leopard {
    constructor() {
        // Proteus in the form of a Leopard
        this.name = "Leopard";
    }
    tell_me_the_future() {
        if (Math.floor(Math.random() * 2)) {
            Object.assign(this, new lion_1.default());
            //this.constructor = Lion
            this.tell_me_the_future = lion_1.default.prototype.tell_me_the_future;
            this.tell_me_your_form = lion_1.default.prototype.tell_me_your_form;
        }
        else {
            Object.assign(this, new serpent_1.default());
            //this.constructor = Serpent            
            this.tell_me_the_future = serpent_1.default.prototype.tell_me_the_future;
            this.tell_me_your_form = serpent_1.default.prototype.tell_me_your_form;
        }
    }
    tell_me_your_form() {
        console.log(`I am the form of ${this.name}`);
    }
}
exports.default = Leopard;
