// The Template Method Pattern Concept"
module TemplateMethod {

    abstract class AbstractClass {
        // A template class containing a template method and primitive methods

        step_one(): void {
            /* Hooks are normally empty in the abstract class. The
            implementing class can optionally override providing a custom
            implementation */
        }

        abstract step_two(): void
        /* An abstract method that must be overridden in the implementing
        class. It has been given `@abstractmethod` decorator so that
        pylint shows the error */


        step_three(): void {
            /* Hooks can also contain default behavior and can be optionally
            overridden */
            console.log('Step Three is a hook that prints this line by default.')
        }

        template_method() {
            /* This is the template method that the subclass will call.
            The subclass(implementing class) doesn't need to override this
            method since it has would have already optionally overridden
            the following methods with its own implementations */
            this.step_one()
            this.step_two()
            this.step_three()
        }
    }

    class ConcreteClassA extends AbstractClass {
        // A concrete class that only overrides step two"
        step_two() {
            console.log('Class_A : Step Two (overridden)')
        }
    }

    class ConcreteClassB extends AbstractClass {
        // A concrete class that only overrides steps one, two and three"
        step_one() {
            console.log('Class_B : Step One (overridden)')
        }

        step_two() {
            console.log('Class_B : Step Two. (overridden)')
        }

        step_three() {
            console.log('Class_B : Step Three. (overridden)')
        }
    }

    // The Client
    const CLASS_A = new ConcreteClassA()
    CLASS_A.template_method()

    const CLASS_B = new ConcreteClassB()
    CLASS_B.template_method()
}