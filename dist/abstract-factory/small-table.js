"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const table_1 = require("./table");
class SmallTable extends table_1.Table {
    constructor() {
        super();
        this.name = 'SmallTable';
        this.height = 40;
        this.width = 40;
        this.depth = 40;
    }
}
exports.default = SmallTable;
