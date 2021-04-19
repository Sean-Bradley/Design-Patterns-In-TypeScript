"use strict";
// Bridge Pattern Concept Sample Code
Object.defineProperty(exports, "__esModule", { value: true });
const circle_implementer_1 = require("./circle-implementer");
const square_implementer_1 = require("./square-implementer");
const circle_1 = require("./circle");
const square_1 = require("./square");
const CIRCLE = new circle_1.default(new circle_implementer_1.default());
CIRCLE.draw();
const SQUARE = new square_1.default(new square_implementer_1.default());
SQUARE.draw();
