"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chair_1 = require("./chair");
class SmallChair extends chair_1.Chair {
    constructor() {
        super();
        this.name = 'SmallChair';
        this.height = 40;
        this.width = 40;
        this.depth = 40;
    }
}
exports.default = SmallChair;
