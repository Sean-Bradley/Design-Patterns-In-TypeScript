"use strict";
// Abstract Furniture Factory
Object.defineProperty(exports, "__esModule", { value: true });
const chair_factory_1 = require("./chair-factory");
const table_factory_1 = require("./table-factory");
class FurnitureFactory {
    static getFurniture(furniture) {
        try {
            if (['SmallChair', 'MediumChair', 'BigChair'].indexOf(furniture) > -1) {
                return chair_factory_1.default.getChair(furniture);
            }
            if (['SmallTable', 'MediumTable', 'BigTable'].indexOf(furniture) > -1) {
                return table_factory_1.default.getTable(furniture);
            }
            throw new Error('No Factory Found');
        }
        catch (e) {
            console.log(e);
        }
    }
}
exports.default = FurnitureFactory;
