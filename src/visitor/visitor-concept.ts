// The Visitor Pattern Concept

interface IVisitor {
    // An interface that custom Visitors should implement
    visit(part: Part): void
}

interface IVisitable {
    // An interface the concrete objects should implement that allows
    // the visitor to traverse a hierarchical structure of objects
    accept(visitor: IVisitor): void
}

class Part implements IVisitable {
    // a.k.a Element. An Object that can be part of any hierarchy
    name: string
    value: number
    parts: Set<Part>

    constructor(name: string, value: number, parent?: Part) {
        this.name = name
        this.value = value
        this.parts = new Set()
        if (parent) {
            parent.parts.add(this)
        }
    }

    accept(visitor: IVisitor) {
        // required by the Visitor that will traverse
        this.parts.forEach((part) => {
            part.accept(visitor)
        })
        visitor.visit(this)
    }
}

// The Client
// Creating an example object hierarchy.
const Part_A = new Part('A', 101)
const Part_B = new Part('B', 305, Part_A)
const Part_C = new Part('C', 185, Part_A)
const Part_D = new Part('D', -30, Part_B)

// Now Rather than changing the Part class to support custom
// operations, we can utilise the accept method that was
// implemented in the Part class because of the addition of
// the IVisitable interface

class PrintPartNamesVisitor implements IVisitor {
    // Create a visitor that prints the part names
    visit(part: Part) {
        console.log(part.name)
    }
}

// Using the PrintPartNamesVisitor to traverse the object hierarchy
Part_A.accept(new PrintPartNamesVisitor())

class CalculatePartTotalsVisitor implements IVisitor {
    // Create a visitor that totals the part values
    totalValue = 0

    visit(part: Part) {
        this.totalValue += part.value
    }
}

// Using the CalculatePartTotalsVisitor to traverse the
// object hierarchy
const CALC_TOTALS_VISITOR = new CalculatePartTotalsVisitor()
Part_A.accept(CALC_TOTALS_VISITOR)
console.log(CALC_TOTALS_VISITOR.totalValue)
