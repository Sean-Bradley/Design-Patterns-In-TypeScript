"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const leopard_1 = require("./leopard");
const lion_1 = require("./lion");
class Serpent {
    constructor() {
        // Proteus in the form of a Serpent
        this.name = "Serpent";
    }
    tell_me_the_future() {
        if (Math.floor(Math.random() * 2)) {
            Object.assign(this, new leopard_1.default());
            //this.constructor = Leopard
            this.tell_me_the_future = leopard_1.default.prototype.tell_me_the_future;
            this.tell_me_your_form = leopard_1.default.prototype.tell_me_your_form;
        }
        else {
            Object.assign(this, new lion_1.default());
            //this.constructor = Lion
            this.tell_me_the_future = lion_1.default.prototype.tell_me_the_future;
            this.tell_me_your_form = lion_1.default.prototype.tell_me_your_form;
        }
    }
    tell_me_your_form() {
        console.log(`I am the form of ${this.name}`);
    }
}
exports.default = Serpent;
