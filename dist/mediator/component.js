"use strict";
// Each component stays synchronized through a mediator
Object.defineProperty(exports, "__esModule", { value: true });
exports.Component = void 0;
class Component {
    constructor(mediator, name) {
        this.mediator = mediator;
        this.name = name;
    }
    notify(message) {
        console.log(this.name + ": >>> Out >>> : " + message);
        this.mediator.notify(message, this);
    }
    receive(message) {
        console.log(this.name + ": <<< In <<< : " + message);
    }
}
exports.Component = Component;
