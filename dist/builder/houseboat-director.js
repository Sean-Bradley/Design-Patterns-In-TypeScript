"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const house_builder_1 = require("./house-builder");
class HouseBoatDirector {
    static construct() {
        return new house_builder_1.default()
            .setBuildingType('House Boat')
            .setWallMaterial('Wood')
            .setNumberDoors(6)
            .setNumberWindows(8)
            .getResult();
    }
}
exports.default = HouseBoatDirector;
