"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Factory Use Case Example Code
const chair_factory_1 = require("./chair-factory");
//module FactoryUseCase {
const CHAIR = chair_factory_1.ChairFactory.getChair("SmallChair");
console.log(CHAIR.getDimensions());
//}
