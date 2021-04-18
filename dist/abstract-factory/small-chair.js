"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SmallChair = void 0;
class SmallChair {
    constructor() {
        this.name = "SmallChair";
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
exports.SmallChair = SmallChair;
