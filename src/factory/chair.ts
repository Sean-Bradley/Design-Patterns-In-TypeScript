import {dimension} from './dimension'

// A Chair Interface
interface IChair {
    height: number
    width: number
    depth: number
    getDimensions(): dimension
}

// The Chair Base Class
export default class Chair implements IChair {
    height = 0
    width = 0
    depth = 0

    getDimensions(): dimension {
        return {
            width: this.width,
            depth: this.depth,
            height: this.height,
        }
    }
}
