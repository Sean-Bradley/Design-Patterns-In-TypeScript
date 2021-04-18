"use strict";
// The Builder Class
Object.defineProperty(exports, "__esModule", { value: true });
exports.HouseBuilder = void 0;
const house_1 = require("./house");
class HouseBuilder {
    constructor() {
        this.house = new house_1.House();
    }
    set_building_type(building_type) {
        this.house.building_type = building_type;
        return this;
    }
    set_wall_material(wall_material) {
        this.house.wall_material = wall_material;
        return this;
    }
    set_number_doors(number) {
        this.house.doors = number;
        return this;
    }
    set_number_windows(number) {
        this.house.windows = number;
        return this;
    }
    get_result() {
        return this.house;
    }
}
exports.HouseBuilder = HouseBuilder;
