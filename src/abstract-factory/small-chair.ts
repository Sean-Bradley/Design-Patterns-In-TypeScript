import {Chair} from './chair'

export default class SmallChair extends Chair {
    constructor() {
        super()
        this.name = 'SmallChair'
        this.height = 40
        this.width = 40
        this.depth = 40
    }
}
