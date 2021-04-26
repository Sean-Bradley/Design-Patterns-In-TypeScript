"use strict";
// The Iterator Pattern Concept
class IteratorConcept {
    constructor(aggregates) {
        this.index = 0;
        this.aggregates = aggregates;
    }
    next() {
        if (this.index < this.aggregates.length) {
            const aggregate = this.aggregates[this.index];
            this.index += 1;
            return aggregate;
        }
        throw new Error('At End of Iterator');
    }
    hasNext() {
        return this.index < this.aggregates.length;
    }
}
class Aggregate {
    // A concrete object
    method() {
        console.log('This method has been invoked');
    }
}
// The Client
const AGGREGATES = [
    new Aggregate(),
    new Aggregate(),
    new Aggregate(),
    new Aggregate(),
];
// AGGREGATES is an array that is already iterable by default.
// but we can create own own iterator on top anyway.
const ITERABLE = new IteratorConcept(AGGREGATES);
while (ITERABLE.hasNext()) {
    ITERABLE.next().method();
}
