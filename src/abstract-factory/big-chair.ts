import Chair from './chair'

export default class BigChair implements Chair {
    name: string
    height: number
    width: number
    depth: number

    constructor() {
        this.name = 'BigChair'
        this.height = 80
        this.width = 80
        this.depth = 80
    }

    getDimensions() {
        return {
            width: this.width,
            depth: this.depth,
            height: this.height,
        }
    }
}
