"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chair_1 = require("./chair");
class MediumChair extends chair_1.default {
    constructor() {
        super();
        this.height = 60;
        this.width = 60;
        this.depth = 60;
    }
}
exports.default = MediumChair;
