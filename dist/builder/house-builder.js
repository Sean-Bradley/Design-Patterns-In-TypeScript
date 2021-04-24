"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const house_1 = require("./house");
class HouseBuilder {
    constructor() {
        this.house = new house_1.default();
    }
    setBuildingType(buildingType) {
        this.house.buildingType = buildingType;
        return this;
    }
    setWallMaterial(wallMaterial) {
        this.house.wallMaterial = wallMaterial;
        return this;
    }
    setNumberDoors(number) {
        this.house.doors = number;
        return this;
    }
    setNumberWindows(number) {
        this.house.windows = number;
        return this;
    }
    getResult() {
        return this.house;
    }
}
exports.default = HouseBuilder;
