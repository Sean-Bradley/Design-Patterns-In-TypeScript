"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const house_builder_1 = require("./house-builder");
class CastleDirector {
    static construct() {
        return new house_builder_1.default()
            .setBuildingType('Castle')
            .setWallMaterial('Sandstone')
            .setNumberDoors(100)
            .setNumberWindows(200)
            .getResult();
    }
}
exports.default = CastleDirector;
