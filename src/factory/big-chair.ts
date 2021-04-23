import Chair from './chair'

export default class BigChair extends Chair {
    constructor() {
        super()
        this.height = 80
        this.width = 80
        this.depth = 80
    }
}
