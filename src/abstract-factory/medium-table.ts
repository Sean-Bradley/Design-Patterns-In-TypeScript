import Table from "./table"

export default class MediumTable implements Table {

    name: string
    height: number
    width: number
    depth: number

    constructor() {
        this.name = "MediumTable"
        this.height = 60
        this.width = 60
        this.depth = 60
    }

    public getDimensions(): dimension {
        return {
            "width": this.width,
            "depth": this.depth,
            "height": this.height
        }
    }
}