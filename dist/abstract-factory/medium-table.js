"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediumTable = void 0;
class MediumTable {
    constructor() {
        this.name = "MediumTable";
        this.height = 60;
        this.width = 60;
        this.depth = 60;
    }
    getDimensions() {
        return {
            "width": this.width,
            "depth": this.depth,
            "height": this.height
        };
    }
}
exports.MediumTable = MediumTable;
