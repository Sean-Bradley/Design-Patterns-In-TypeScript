"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cube_b_1 = require("./cube-b");
class CubeBAdapter {
    constructor() {
        this.cube = new cube_b_1.default();
    }
    manufacture(width, height, depth) {
        const success = this.cube.create([0 - width / 2, 0 - height / 2, 0 - depth / 2], [0 + width / 2, 0 + height / 2, 0 + depth / 2]);
        return success;
    }
}
exports.default = CubeBAdapter;
