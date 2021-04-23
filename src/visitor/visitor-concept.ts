// The Visitor Pattern Concept
namespace VisitorConcept {
    interface IVisitor {
        // An interface that custom Visitors should implement
        visit(element: Element): void
    }

    interface IVisitable {
        /* An interface the concrete objects should implement that allows
        the visitor to traverse a hierarchical structure of objects */
        accept(visitor: IVisitor): void
    }

    class Element implements IVisitable {
        // An Object that can be part of any hierarchy
        name: string
        value: number
        elements: Set<Element>

        constructor(name: string, value: number, parent?: Element) {
            this.name = name
            this.value = value
            this.elements = new Set()
            if (parent) {
                parent.elements.add(this)
            }
        }

        accept(visitor: IVisitor) {
            // required by the Visitor that will traverse
            this.elements.forEach((element) => {
                element.accept(visitor)
            })
            visitor.visit(this)
        }
    }

    // The Client
    // Creating an example object hierarchy.
    const Element_A = new Element('A', 101)
    const Element_B = new Element('B', 305, Element_A)
    const Element_C = new Element('C', 185, Element_A)
    const Element_D = new Element('D', -30, Element_B)

    /* Now Rather than changing the Element class to support custom
    operations, we can utilise the accept method that was
    implemented in the Element class because of the addition of
    the IVisitable interface */

    class PrintElementNamesVisitor implements IVisitor {
        // Create a visitor that prints the Element names
        visit(element: Element) {
            console.log(element.name)
        }
    }

    // Using the PrintElementNamesVisitor to traverse the object hierarchy
    Element_A.accept(new PrintElementNamesVisitor())

    class CalculateElementTotalsVisitor implements IVisitor {
        // Create a visitor that totals the Element values
        totalValue = 0

        visit(element: Element) {
            this.totalValue += element.value
            return this.totalValue
        }
    }

    // Using the CalculateElementTotalsVisitor to traverse the
    // object hierarchy
    const CALC_TOTALS_VISITOR = new CalculateElementTotalsVisitor()
    Element_A.accept(CALC_TOTALS_VISITOR)
    console.log(CALC_TOTALS_VISITOR.totalValue)
}
