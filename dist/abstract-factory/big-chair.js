"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BigChair {
    constructor() {
        this.name = 'BigChair';
        this.height = 80;
        this.width = 80;
        this.depth = 80;
    }
    getDimensions() {
        return {
            width: this.width,
            depth: this.depth,
            height: this.height,
        };
    }
}
exports.default = BigChair;
