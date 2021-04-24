"use strict";
// Bridge Pattern Concept Sample Code
class RefinedAbstractionA {
    constructor(implementer) {
        this.implementer = implementer;
    }
    method(value) {
        this.implementer.method(value);
    }
}
class RefinedAbstractionB {
    constructor(implementer) {
        this.implementer = implementer;
    }
    method(value) {
        this.implementer.method(value);
    }
}
class ConcreteImplementerA {
    method(value) {
        console.log(value);
    }
}
class ConcreteImplementerB {
    method(value) {
        value.forEach((v) => console.log(v));
    }
}
// The Client
const VALUES = ['a', 'b', 'c'];
const REFINED_ABSTRACTION_A = new RefinedAbstractionA(new ConcreteImplementerA());
REFINED_ABSTRACTION_A.method(VALUES);
const REFINED_ABSTRACTION_B = new RefinedAbstractionB(new ConcreteImplementerB());
REFINED_ABSTRACTION_B.method(VALUES);
