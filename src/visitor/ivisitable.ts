import IVisitor from "./ivisitor";

export default interface IVisitable {
    // An interface the concrete objects should implement that allows
    // the visitor to traverse a hierarchical structure of objects 
    accept(visitor: IVisitor): void
}