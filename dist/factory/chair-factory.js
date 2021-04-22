"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const small_chair_1 = require("./small-chair");
const medium_chair_1 = require("./medium-chair");
const big_chair_1 = require("./big-chair");
class ChairFactory {
    static getChair(chair) {
        if (chair == 'BigChair') {
            return new big_chair_1.default();
        }
        else if (chair == 'MediumChair') {
            return new medium_chair_1.default();
        }
        else {
            return new small_chair_1.default();
        }
    }
}
exports.default = ChairFactory;
