import {dimension} from './dimension'

export interface IChair {
    name: string
    height: number
    width: number
    depth: number

    getDimensions(): dimension
}

export class Chair implements IChair {
    name = ''
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
