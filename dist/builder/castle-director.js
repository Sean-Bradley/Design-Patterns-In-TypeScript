"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CastleDirector = void 0;
// A Director Class
const house_builder_1 = require("./house-builder");
var CastleDirector;
(function (CastleDirector) {
    function construct() {
        return new house_builder_1.HouseBuilder()
            .set_building_type("Castle")
            .set_wall_material("Sandstone")
            .set_number_doors(100)
            .set_number_windows(200)
            .get_result();
    }
    CastleDirector.construct = construct;
})(CastleDirector = exports.CastleDirector || (exports.CastleDirector = {}));
