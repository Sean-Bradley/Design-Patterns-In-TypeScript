import Table from './table'

export default class BigTable implements Table {
    name: string
    height: number
    width: number
    depth: number

    constructor() {
        this.name = 'BigTable'
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
