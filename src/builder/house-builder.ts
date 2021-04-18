// The Builder Class

import { House } from './house'

export class HouseBuilder {

    house: House

    constructor() {
        this.house = new House()
    }

    set_building_type(building_type: string) {
        this.house.building_type = building_type
        return this
    }

    set_wall_material(wall_material: string) {
        this.house.wall_material = wall_material
        return this
    }

    set_number_doors(number: number) {
        this.house.doors = number
        return this
    }

    set_number_windows(number: number) {
        this.house.windows = number
        return this
    }

    get_result() {
        return this.house
    }
}