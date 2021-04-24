"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const table_1 = require("./table");
class MediumTable extends table_1.Table {
    constructor() {
        super();
        this.name = 'MediumTable';
        this.height = 60;
        this.width = 60;
        this.depth = 60;
    }
}
exports.default = MediumTable;
