import {dimension} from './dimension'

export interface ITable {
    name: string
    height: number
    width: number
    depth: number

    getDimensions(): dimension
}

export class Table implements ITable {
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
