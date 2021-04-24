"use strict";
// A Formatted Table
Object.defineProperty(exports, "__esModule", { value: true });
const row_1 = require("./row");
class Table {
    constructor(row_count, column_count) {
        this.rows = [];
        for (let i = 0; i < row_count; i++) {
            this.rows.push(new row_1.default(column_count));
        }
    }
    draw() {
        // Draws the table formatted in the console
        let maxRowLength = 0;
        const rows = [];
        this.rows.forEach((row) => {
            const rowData = row.getData();
            rows.push(`|${rowData}`);
            const rowLength = rowData.length + 1;
            if (maxRowLength < rowLength) {
                maxRowLength = rowLength;
            }
        });
        console.log('-'.repeat(maxRowLength));
        rows.forEach((row) => {
            console.log(row);
        });
        console.log('-'.repeat(maxRowLength));
    }
}
exports.default = Table;
