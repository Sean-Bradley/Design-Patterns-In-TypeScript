// The Iterator Pattern Concept

interface IIterator {
    next(): IAggregate
    // Return the object in collection

    hasNext(): boolean
    // Returns Boolean whether at end of collection or not
}

class IteratorConcept implements IIterator {
    // The concrete iterator (iterable)
    index: number
    aggregates: IAggregate[]

    constructor(aggregates: IAggregate[]) {
        this.index = 0
        this.aggregates = aggregates
    }

    next() {
        if (this.index < this.aggregates.length) {
            const aggregate = this.aggregates[this.index]
            this.index += 1
            return aggregate
        }
        throw new Error('At End of Iterator')
    }

    hasNext() {
        return this.index < this.aggregates.length
    }
}

interface IAggregate {
    // An interface that the aggregates should implement
    method(): void
}

class Aggregate implements IAggregate {
    // A concrete object
    method(): void {
        console.log('This method has been invoked')
    }
}

// The Client
const AGGREGATES = [
    new Aggregate(),
    new Aggregate(),
    new Aggregate(),
    new Aggregate(),
]

// AGGREGATES is an array that is already iterable by default.
// but we can create own own iterator on top anyway.
const ITERABLE = new IteratorConcept(AGGREGATES)

while (ITERABLE.hasNext()) {
    ITERABLE.next().method()
}
