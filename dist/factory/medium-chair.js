"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MediumChair {
    constructor() {
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
exports.default = MediumChair;
