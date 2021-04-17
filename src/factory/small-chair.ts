import Chair from "./chair"

export default class SmallChair implements Chair {
    //The Small Chair Concrete Class implements the Chair interface"

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