import AbstractCarPart from './abstract-car-part'

export default interface IVisitor {
    // An interface that custom Visitors should implement
    visit(abstractCarPart: AbstractCarPart): void
}
