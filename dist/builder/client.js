"use strict";
// House Builder Example Code
Object.defineProperty(exports, "__esModule", { value: true });
const igloo_director_1 = require("./igloo-director");
const castle_director_1 = require("./castle-director");
const houseboat_director_1 = require("./houseboat-director");
const IGLOO = igloo_director_1.default.construct();
const CASTLE = castle_director_1.default.construct();
const HOUSEBOAT = houseboat_director_1.default.construct();
console.log(IGLOO.construction());
console.log(CASTLE.construction());
console.log(HOUSEBOAT.construction());
