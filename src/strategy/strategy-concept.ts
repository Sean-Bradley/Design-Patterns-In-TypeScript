// The Strategy Pattern Concept

class ObjectContext {
    // This is the object whose behavior will change

    request(strategy: IStrategyConstructor) {
        // The request is handled by the class passed in
        return new strategy()
    }
}

interface IStrategyConstructor {
    // A Constructor for the IStrategy
    new (): IStrategy
}

interface IStrategy {
    // A strategy Interface
    method(): string
}

class ConcreteStrategyA implements IStrategy {
    // A Concrete Strategy Subclass

    method() {
        return 'I am ConcreteStrategyA'
    }
}

class ConcreteStrategyB implements IStrategy {
    // A Concrete Strategy Subclass

    method() {
        return 'I am ConcreteStrategyB'
    }
}

class ConcreteStrategyC implements IStrategy {
    // A Concrete Strategy Subclass

    method() {
        return 'I am ConcreteStrategyC'
    }
}

// The Client
const OBJECT_CONTEXT = new ObjectContext()

console.log(OBJECT_CONTEXT.request(ConcreteStrategyA).method())
console.log(OBJECT_CONTEXT.request(ConcreteStrategyB).method())
console.log(OBJECT_CONTEXT.request(ConcreteStrategyC).method())
