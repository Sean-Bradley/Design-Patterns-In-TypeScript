import { Chair } from "./chair"

export class SmallChair implements Chair {

    height: number
    width: number
    depth: number

    constructor() {
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