"use strict";
"The Product";
Object.defineProperty(exports, "__esModule", { value: true });
exports.House = void 0;
class House {
    constructor() {
        this.doors = 0;
        this.windows = 0;
        this.wall_material = "";
        this.building_type = "";
    }
    construction() {
        return `This is a ${this.wall_material} ${this.building_type} with ${this.doors} door(s) and ${this.windows} window(s).`;
    }
}
exports.House = House;
