import IAbstractExpression from "./iabstract-expression"
export default class Add implements IAbstractExpression {
    // Non-Terminal Expression.

    left: IAbstractExpression
    right: IAbstractExpression

    constructor(left: IAbstractExpression, right: IAbstractExpression) {
        this.left = left
        this.right = right
    }

    interpret(): number {
        return this.left.interpret() + this.right.interpret()
    }
}
