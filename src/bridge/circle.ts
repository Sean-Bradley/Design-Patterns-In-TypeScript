// A Circle Abstraction
import Shape from './shape'
import ShapeImplementor from './shape-implementer'

export default class Circle implements Shape {
    implementer: ShapeImplementor

    constructor(implementer: ShapeImplementor) {
        this.implementer = implementer
    }

    draw() {
        this.implementer.drawImplementation()
    }
}