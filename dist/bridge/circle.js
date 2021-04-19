"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Circle {
    constructor(implementer) {
        this.implementer = implementer;
    }
    draw() {
        this.implementer.drawImplementation();
    }
}
exports.default = Circle;
