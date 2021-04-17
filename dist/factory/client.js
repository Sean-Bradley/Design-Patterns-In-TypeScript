"use strict";
// Factory Use Case Example Code
Object.defineProperty(exports, "__esModule", { value: true });
const chair_factory_1 = require("./chair-factory");
const CHAIR = chair_factory_1.default.getChair("SmallChair");
console.log(CHAIR.getDimensions());
