"use strict";
// Decorator Concept Sample Code
var DecoratorConcept;
(function (DecoratorConcept) {
    class Component {
        method() {
            return "Component Method";
        }
    }
    class Decorator {
        constructor(object) {
            this.object = object;
        }
        method() {
            return `Decorator Method(${this.object.method()})`;
        }
    }
    // The Client
    const COMPONENT = new Component();
    console.log(COMPONENT.method());
    // The component can be decorated
    const Decorated = new Decorator(COMPONENT);
    console.log(Decorated.method());
    // The decorated component can be decorated again
    const Decorated2 = new Decorator(Decorated);
    console.log(Decorated2.method());
})(DecoratorConcept || (DecoratorConcept = {}));
