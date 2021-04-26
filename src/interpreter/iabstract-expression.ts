export default interface IAbstractExpression {
    // All Terminal and Non-Terminal expressions will implement an `interpret` method
    value?: number
    left?: IAbstractExpression
    right?: IAbstractExpression
    interpret(): number
}
