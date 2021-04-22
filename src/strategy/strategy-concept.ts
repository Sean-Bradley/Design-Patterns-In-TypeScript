// The Strategy Pattern Concept
module StrategyConcept {

    class Context {
        // This is the object whose behavior will change

        request(strategy: IStrategyConstructor) {
            // The request is handled by the class passed in
            return new strategy()
        }
    }

    interface IStrategyConstructor {
        // A Constructor for the IStrategy
        new(): IStrategy;
    }
    
    interface IStrategy {
        // A strategy Interface
        method(): void
    }

    class ConcreteStrategyA implements IStrategy {
        // A Concrete Strategy Subclass        
        constructor() {
            this.toString = this.toString
        }

        method() {
            return "I am ConcreteStrategyA"
        }
    }

    class ConcreteStrategyB implements IStrategy {
        // A Concrete Strategy Subclass

        method() {
            return "I am ConcreteStrategyB"
        }
    }

    class ConcreteStrategyC implements IStrategy {
        // A Concrete Strategy Subclass

        method() {
            return "I am ConcreteStrategyC"
        }
    }

    // The Client
    const CONTEXT = new Context()

    console.log(CONTEXT.request(ConcreteStrategyA).method())
    console.log(CONTEXT.request(ConcreteStrategyB).method())
    console.log(CONTEXT.request(ConcreteStrategyC).method())
}