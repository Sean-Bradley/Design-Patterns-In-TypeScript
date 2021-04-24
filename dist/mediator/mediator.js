"use strict";
// The Subject that all components will stay synchronized with
Object.defineProperty(exports, "__esModule", { value: true });
class Mediator {
    constructor() {
        this.components = new Set();
    }
    add(component) {
        // Add components
        this.components.add(component);
    }
    notify(message, originator) {
        // Add components except for the originator component
        this.components.forEach((component) => {
            if (component !== originator) {
                component.receive(message);
            }
        });
    }
}
exports.default = Mediator;
