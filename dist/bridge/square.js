"use strict";
// A Square Abstraction
Object.defineProperty(exports, "__esModule", { value: true });
class Square {
    constructor(implementer) {
        this.implementer = implementer;
    }
    draw() {
        this.implementer.drawImplementation();
    }
}
exports.default = Square;
