"The Product"

export class House {

    doors: number = 0
    windows: number = 0
    wall_material: string = ""
    building_type: string = ""

    construction() {
        return `This is a ${this.wall_material} ${this.building_type} with ${this.doors} door(s) and ${this.windows} window(s).`
    }

}