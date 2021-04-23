"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Abstract Factory Use Case Example Code
const furniture_factory_1 = require("./furniture-factory");
let FURNITURE = furniture_factory_1.default.getFurniture('SmallChair');
console.log(FURNITURE === null || FURNITURE === void 0 ? void 0 : FURNITURE.name);
console.log(FURNITURE === null || FURNITURE === void 0 ? void 0 : FURNITURE.getDimensions());
FURNITURE = furniture_factory_1.default.getFurniture('MediumTable');
console.log(FURNITURE === null || FURNITURE === void 0 ? void 0 : FURNITURE.name);
console.log(FURNITURE === null || FURNITURE === void 0 ? void 0 : FURNITURE.getDimensions());
