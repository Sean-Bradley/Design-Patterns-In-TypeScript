// Adapter Concept Sample Code
module AdapterConcept {
    interface IA {
        method_a(): void
    }

    class ClassA implements IA {
        method_a() {
            console.log("method A")
        }
    }

    interface IB {
        method_b(): void
    }


    class ClassB implements IB {
        method_b() {
            console.log("method B")
        }
    }

    class ClassBAdapter implements IA {
        // ClassB does not have a method_a, so we can create an adapter

        private class_b: ClassB

        constructor() {
            this.class_b = new ClassB()
        }

        method_a() {
            "calls the class b method_b instead"
            this.class_b.method_b()
        }
    }

    // The Client
    // Before the adapter I need to test the objects class to know which
    // method to call.
    const ITEMS = [new ClassA(), new ClassB()]
    ITEMS.forEach(item => {
        if (item instanceof ClassB) {
            item.method_b()
        } else {
            item.method_a()
        }
    })

    // After creating an adapter for ClassB I can reuse the same method
    // signature as ClassA (preferred)
    const ADAPTED = [new ClassA(), new ClassBAdapter()]
    ADAPTED.forEach(item => {
        item.method_a()
    })
}