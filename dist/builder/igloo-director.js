"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IglooDirector = void 0;
// A Director Class
const house_builder_1 = require("./house-builder");
var IglooDirector;
(function (IglooDirector) {
    function construct() {
        // Note that in this IglooDirector, it has omitted the
        // set_number_of windows call since this Igloo will have
        // no windows.
        return new house_builder_1.HouseBuilder()
            .set_building_type("Igloo")
            .set_wall_material("Ice")
            .set_number_doors(1)
            .get_result();
    }
    IglooDirector.construct = construct;
})(IglooDirector = exports.IglooDirector || (exports.IglooDirector = {}));
