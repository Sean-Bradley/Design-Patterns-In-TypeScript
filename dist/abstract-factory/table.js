"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Table = void 0;
class Table {
    constructor() {
        this.name = '';
        this.height = 0;
        this.width = 0;
        this.depth = 0;
    }
    getDimensions() {
        return {
            width: this.width,
            depth: this.depth,
            height: this.height,
        };
    }
}
exports.Table = Table;
