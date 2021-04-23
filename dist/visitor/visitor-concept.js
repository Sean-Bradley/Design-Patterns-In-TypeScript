"use strict";
// The Visitor Pattern Concept
var VisitorConcept;
(function (VisitorConcept) {
    class Element {
        constructor(name, value, parent) {
            this.name = name;
            this.value = value;
            this.elements = new Set();
            if (parent) {
                parent.elements.add(this);
            }
        }
        accept(visitor) {
            // required by the Visitor that will traverse
            this.elements.forEach((element) => {
                element.accept(visitor);
            });
            visitor.visit(this);
        }
    }
    // The Client
    // Creating an example object hierarchy.
    const Element_A = new Element('A', 101);
    const Element_B = new Element('B', 305, Element_A);
    const Element_C = new Element('C', 185, Element_A);
    const Element_D = new Element('D', -30, Element_B);
    /* Now Rather than changing the Element class to support custom
    operations, we can utilise the accept method that was
    implemented in the Element class because of the addition of
    the IVisitable interface */
    class PrintElementNamesVisitor {
        // Create a visitor that prints the Element names
        visit(element) {
            console.log(element.name);
        }
    }
    // Using the PrintElementNamesVisitor to traverse the object hierarchy
    Element_A.accept(new PrintElementNamesVisitor());
    class CalculateElementTotalsVisitor {
        constructor() {
            // Create a visitor that totals the Element values
            this.totalValue = 0;
        }
        visit(element) {
            this.totalValue += element.value;
            return this.totalValue;
        }
    }
    // Using the CalculateElementTotalsVisitor to traverse the
    // object hierarchy
    const CALC_TOTALS_VISITOR = new CalculateElementTotalsVisitor();
    Element_A.accept(CALC_TOTALS_VISITOR);
    console.log(CALC_TOTALS_VISITOR.totalValue);
})(VisitorConcept || (VisitorConcept = {}));
