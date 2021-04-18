"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HouseBoatDirector = void 0;
// A Director Class
const house_builder_1 = require("./house-builder");
var HouseBoatDirector;
(function (HouseBoatDirector) {
    function construct() {
        return new house_builder_1.HouseBuilder()
            .set_building_type("House Boat")
            .set_wall_material("Wood")
            .set_number_doors(6)
            .set_number_windows(8)
            .get_result();
    }
    HouseBoatDirector.construct = construct;
})(HouseBoatDirector = exports.HouseBoatDirector || (exports.HouseBoatDirector = {}));
