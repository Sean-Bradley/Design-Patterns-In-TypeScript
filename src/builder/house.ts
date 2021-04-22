"The Product"

export default class House {

    doors: number = 0
    windows: number = 0
    wallMaterial: string = ""
    buildingType: string = ""

    construction() {
        return `This is a ${this.wallMaterial} ${this.buildingType} with ${this.doors} door(s) and ${this.windows} window(s).`
    }

}