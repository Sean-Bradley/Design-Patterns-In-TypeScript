// The Builder Class

import House from './house'

export default class HouseBuilder {

    house: House

    constructor() {
        this.house = new House()
    }

    setBuildingType(buildingType: string) {
        this.house.buildingType = buildingType
        return this
    }

    setWallMaterial(wallMaterial: string) {
        this.house.wallMaterial = wallMaterial
        return this
    }

    setNumberDoors(number: number) {
        this.house.doors = number
        return this
    }

    setNumberWindows(number: number) {
        this.house.windows = number
        return this
    }

    getResult() {
        return this.house
    }
}