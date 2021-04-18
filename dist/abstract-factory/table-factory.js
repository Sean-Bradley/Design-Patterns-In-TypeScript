"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableFactory = void 0;
const small_table_1 = require("./small-table");
const medium_table_1 = require("./medium-table");
const big_table_1 = require("./big-table");
var TableFactory;
(function (TableFactory) {
    function getTable(table) {
        if (table == 'BigTable') {
            return new big_table_1.BigTable();
        }
        else if (table == 'MediumTable') {
            return new medium_table_1.MediumTable();
        }
        else if (table == 'SmallTable') {
            return new small_table_1.SmallTable();
        }
        else {
            throw new Error('No Table Found');
        }
    }
    TableFactory.getTable = getTable;
})(TableFactory = exports.TableFactory || (exports.TableFactory = {}));
