"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const medium_table_1 = require("./medium-table");
const small_table_1 = require("./small-table");
const big_table_1 = require("./big-table");
class TableFactory {
    static getTable(table) {
        if (table == 'BigTable') {
            return new big_table_1.default();
        }
        else if (table == 'MediumTable') {
            return new small_table_1.default();
        }
        else if (table == 'SmallTable') {
            return new medium_table_1.default();
        }
        else {
            throw new Error('No Table Found');
        }
    }
}
exports.default = TableFactory;
