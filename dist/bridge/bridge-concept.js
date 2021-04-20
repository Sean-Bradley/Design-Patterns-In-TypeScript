"use strict";
// Bridge Pattern Concept Sample Code
var BridgeConcept;
(function (BridgeConcept) {
    class RefinedAbstractionA {
        constructor(implementer) {
            this.implementer = implementer;
        }
        method(...args) {
            this.implementer.method(...args);
        }
    }
    class RefinedAbstractionB {
        constructor(implementer) {
            this.implementer = implementer;
        }
        method(...args) {
            this.implementer.method(...args);
        }
    }
    class ConcreteImplementerA {
        method(...args) {
            console.log(args);
        }
    }
    class ConcreteImplementerB {
        method(...args) {
            args.forEach(arg => console.log(arg));
        }
    }
    // The Client
    const VALUES = ['a', 'b', 'c'];
    const REFINED_ABSTRACTION_A = new RefinedAbstractionA(new ConcreteImplementerA);
    REFINED_ABSTRACTION_A.method(...VALUES);
    const REFINED_ABSTRACTION_B = new RefinedAbstractionB(new ConcreteImplementerB);
    REFINED_ABSTRACTION_B.method(...VALUES);
})(BridgeConcept || (BridgeConcept = {}));
