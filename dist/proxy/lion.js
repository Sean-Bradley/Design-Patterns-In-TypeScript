"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const leopard_1 = require("./leopard");
const serpent_1 = require("./serpent");
class Lion {
    constructor() {
        // Proteus in the form of a Lion
        this.name = "Lion";
    }
    tell_me_the_future() {
        // Proteus will change to something random
        //console.log(Math.floor(Math.random() * 2))
        if (Math.floor(Math.random() * 2)) {
            Object.assign(this, new serpent_1.default());
            //this.constructor = Serpent
            this.tell_me_the_future = serpent_1.default.prototype.tell_me_the_future;
            this.tell_me_your_form = serpent_1.default.prototype.tell_me_your_form;
        }
        else {
            Object.assign(this, new leopard_1.default());
            //this.constructor = Leopard
            this.tell_me_the_future = leopard_1.default.prototype.tell_me_the_future;
            this.tell_me_your_form = leopard_1.default.prototype.tell_me_your_form;
        }
    }
    tell_me_your_form() {
        console.log(`I am the form of ${this.name}`);
    }
}
exports.default = Lion;
