"use strict";
"Abstract Furniture Factory";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FurnitureFactory = void 0;
const chair_factory_1 = require("./chair-factory");
const table_factory_1 = require("./table-factory");
var FurnitureFactory;
(function (FurnitureFactory) {
    function getFurniture(furniture) {
        try {
            if (['SmallChair', 'MediumChair', 'BigChair'].indexOf(furniture) > -1) {
                return chair_factory_1.ChairFactory.getChair(furniture);
            }
            if (['SmallTable', 'MediumTable', 'BigTable'].indexOf(furniture) > -1) {
                return table_factory_1.TableFactory.getTable(furniture);
            }
            throw new Error('No Factory Found');
        }
        catch (e) {
            console.log(e);
        }
    }
    FurnitureFactory.getFurniture = getFurniture;
})(FurnitureFactory = exports.FurnitureFactory || (exports.FurnitureFactory = {}));
