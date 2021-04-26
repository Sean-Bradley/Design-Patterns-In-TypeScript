"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const house_builder_1 = require("./house-builder");
class IglooDirector {
    static construct() {
        // Note that in this IglooDirector, it has omitted the
        // set_number_of windows call since this Igloo will have
        // no windows.
        return new house_builder_1.default()
            .setBuildingType('Igloo')
            .setWallMaterial('Ice')
            .setNumberDoors(1)
            .getResult();
    }
}
exports.default = IglooDirector;
