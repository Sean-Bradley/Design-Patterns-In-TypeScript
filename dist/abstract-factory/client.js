"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Abstract Factory Use Case Example Code
const furniture_factory_1 = require("./furniture-factory");
let FURNITURE = furniture_factory_1.default.getFurniture('SmallChair');
console.log(FURNITURE?.name);
console.log(FURNITURE?.getDimensions());
FURNITURE = furniture_factory_1.default.getFurniture('MediumTable');
console.log(FURNITURE?.name);
console.log(FURNITURE?.getDimensions());
