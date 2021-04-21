"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Subtract {
    constructor(left, right) {
        this.left = left;
        this.right = right;
    }
    interpret() {
        return this.left.interpret() - this.right.interpret();
    }
}
exports.default = Subtract;
