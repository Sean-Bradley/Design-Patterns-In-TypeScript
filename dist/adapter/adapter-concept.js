"use strict";
// Adapter Concept Sample Code
var AdapterConcept;
(function (AdapterConcept) {
    class ClassA {
        method_a() {
            console.log("method A");
        }
    }
    class ClassB {
        method_b() {
            console.log("method B");
        }
    }
    class ClassBAdapter {
        constructor() {
            this.class_b = new ClassB();
        }
        method_a() {
            "calls the class b method_b instead";
            this.class_b.method_b();
        }
    }
    // The Client
    // Before the adapter I need to test the objects class to know which
    // method to call.
    const ITEMS = [new ClassA(), new ClassB()];
    ITEMS.forEach(item => {
        if (item instanceof ClassB) {
            item.method_b();
        }
        else {
            item.method_a();
        }
    });
    // After creating an adapter for ClassB I can reuse the same method
    // signature as ClassA (preferred)
    const ADAPTED = [new ClassA(), new ClassBAdapter()];
    ADAPTED.forEach(item => {
        item.method_a();
    });
})(AdapterConcept || (AdapterConcept = {}));
