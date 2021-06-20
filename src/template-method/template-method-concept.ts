// The Template Method Pattern Concept"

abstract class AbstractClass {
    // A template class containing a template method and primitive methods

    stepOne(): void {
        // Hooks are normally empty in the abstract class. The
        // implementing class can optionally override providing a custom
        // implementation
    }

    abstract stepTwo(): void
    // An abstract method that must be overridden in the implementing
    // class. Note the addition of the `abstract` keyword

    stepThree(): void {
        // Hooks can also contain default behavior and can be optionally
        // overridden
        console.log('Step Three is a hook that prints this line by default.')
    }

    templateMethod() {
        // This is the template method that the subclass will call.
        // The subclass(implementing class) doesn't need to override this
        // method since it has would have already optionally overridden
        // the following methods with its own implementations
        this.stepOne()
        this.stepTwo()
        this.stepThree()
    }
}

class ConcreteClassA extends AbstractClass {
    // A concrete class that only overrides step two"
    stepTwo() {
        console.log('Class_A : Step Two (overridden)')
    }
}

class ConcreteClassB extends AbstractClass {
    // A concrete class that only overrides steps one, two and three"
    stepOne() {
        console.log('Class_B : Step One (overridden)')
    }

    stepTwo() {
        console.log('Class_B : Step Two. (overridden)')
    }

    stepThree() {
        console.log('Class_B : Step Three. (overridden)')
    }
}

// The Client
const CLASS_A = new ConcreteClassA()
CLASS_A.templateMethod()

const CLASS_B = new ConcreteClassB()
CLASS_B.templateMethod()
