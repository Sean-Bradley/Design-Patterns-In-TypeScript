"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChairFactory = void 0;
const small_chair_1 = require("./small-chair");
const medium_chair_1 = require("./medium-chair");
const big_chair_1 = require("./big-chair");
var ChairFactory;
(function (ChairFactory) {
    function getChair(chair) {
        if (chair == 'BigChair') {
            return new big_chair_1.BigChair();
        }
        else if (chair == 'MediumChair') {
            return new medium_chair_1.MediumChair();
        }
        else {
            return new small_chair_1.SmallChair();
        }
    }
    ChairFactory.getChair = getChair;
})(ChairFactory = exports.ChairFactory || (exports.ChairFactory = {}));
