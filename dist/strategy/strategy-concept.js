"use strict";
// The Strategy Pattern Concept
var StrategyConcept;
(function (StrategyConcept) {
    class Context {
        // This is the object whose behavior will change
        request(strategy) {
            // The request is handled by the class passed in
            return new strategy();
        }
    }
    class ConcreteStrategyA {
        // A Concrete Strategy Subclass        
        constructor() {
            this.toString = this.toString;
        }
        method() {
            return "I am ConcreteStrategyA";
        }
    }
    class ConcreteStrategyB {
        // A Concrete Strategy Subclass
        method() {
            return "I am ConcreteStrategyB";
        }
    }
    class ConcreteStrategyC {
        // A Concrete Strategy Subclass
        method() {
            return "I am ConcreteStrategyC";
        }
    }
    // The Client
    const CONTEXT = new Context();
    console.log(CONTEXT.request(ConcreteStrategyA).method());
    console.log(CONTEXT.request(ConcreteStrategyB).method());
    console.log(CONTEXT.request(ConcreteStrategyC).method());
})(StrategyConcept || (StrategyConcept = {}));
