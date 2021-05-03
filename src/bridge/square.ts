// A Square Abstraction

import IShape from './ishape'
import IShapeImplementor from './ishape-implementer'

export default class Square implements IShape {
    #implementer: IShapeImplementor

    constructor(implementer: IShapeImplementor) {
        this.#implementer = implementer
    }

    draw(): void {
        this.#implementer.drawImplementation()
    }
}
