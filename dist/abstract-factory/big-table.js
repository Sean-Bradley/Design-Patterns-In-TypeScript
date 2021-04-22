"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BigTable {
    constructor() {
        this.name = "BigTable";
        this.height = 80;
        this.width = 80;
        this.depth = 80;
    }
    getDimensions() {
        return {
            "width": this.width,
            "depth": this.depth,
            "height": this.height
        };
    }
}
exports.default = BigTable;
