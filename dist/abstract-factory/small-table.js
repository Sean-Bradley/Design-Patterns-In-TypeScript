"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SmallTable = void 0;
class SmallTable {
    constructor() {
        this.name = "SmallTable";
        this.height = 40;
        this.width = 40;
        this.depth = 40;
    }
    getDimensions() {
        return {
            "width": this.width,
            "depth": this.depth,
            "height": this.height
        };
    }
}
exports.SmallTable = SmallTable;
