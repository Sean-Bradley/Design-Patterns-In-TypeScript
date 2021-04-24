"use strict";
// A Row in the Table
Object.defineProperty(exports, "__esModule", { value: true });
const column_1 = require("./column");
class Row {
    constructor(column_count) {
        this.columns = [];
        for (let i = 0; i < column_count; i++) {
            this.columns.push(new column_1.default());
        }
    }
    getData() {
        // Format the row before returning it to the table
        let ret = '';
        this.columns.forEach((column) => {
            ret = `${ret}${column.getData()}|`;
        });
        return ret;
    }
}
exports.default = Row;
