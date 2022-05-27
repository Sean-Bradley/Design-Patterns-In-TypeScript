"use strict";
// The Visitor Pattern Concept
class Part {
    constructor(name, value, parent) {
        this.name = name;
        this.value = value;
        this.parts = new Set();
        if (parent) {
            parent.parts.add(this);
        }
    }
    accept(visitor) {
        // required by the Visitor that will traverse
        this.parts.forEach((part) => {
            part.accept(visitor);
        });
        visitor.visit(this);
    }
}
// The Client
// Creating an example object hierarchy.
const Part_A = new Part('A', 101);
const Part_B = new Part('B', 305, Part_A);
const Part_C = new Part('C', 185, Part_A);
const Part_D = new Part('D', -30, Part_B);
// Now Rather than changing the Part class to support custom
// operations, we can utilise the accept method that was
// implemented in the Part class because of the addition of
// the IVisitable interface
class PrintPartNamesVisitor {
    // Create a visitor that prints the part names
    visit(part) {
        console.log(part.name);
    }
}
// Using the PrintPartNamesVisitor to traverse the object hierarchy
Part_A.accept(new PrintPartNamesVisitor());
class CalculatePartTotalsVisitor {
    constructor() {
        // Create a visitor that totals the part values
        this.totalValue = 0;
    }
    visit(part) {
        this.totalValue += part.value;
    }
}
// Using the CalculatePartTotalsVisitor to traverse the
// object hierarchy
const CALC_TOTALS_VISITOR = new CalculatePartTotalsVisitor();
Part_A.accept(CALC_TOTALS_VISITOR);
console.log(CALC_TOTALS_VISITOR.totalValue);
