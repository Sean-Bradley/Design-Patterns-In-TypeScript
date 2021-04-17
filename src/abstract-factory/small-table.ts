import Table from "./table"

export default class SmallTable implements Table {

    name: string
    height: number
    width: number
    depth: number

    constructor() {
        this.name = "SmallTable"
        this.height = 40
        this.width = 40
        this.depth = 40
    }

    getDimensions() {
        return {
            "width": this.width,
            "depth": this.depth,
            "height": this.height
        }
    }
}