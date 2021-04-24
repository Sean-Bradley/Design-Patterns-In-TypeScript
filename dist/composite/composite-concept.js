"use strict";
// The Composite pattern concept
class Leaf {
    constructor(name) {
        // A Leaf can be added to a composite, but not a leaf
        this.referenceToParent = undefined;
        this.name = name;
    }
    method() {
        const parent = this.referenceToParent ? this.referenceToParent.name : 'none';
        console.log(`<Leaf>\t\tname:${this.name}\tParent:\t${parent}`);
    }
    detach() {
        'Detaching this leaf from its parent composite';
        if (this.referenceToParent) {
            this.referenceToParent.delete(this);
        }
    }
}
class Composite {
    constructor(name) {
        this.name = name;
        this.components = [];
    }
    method() {
        const parent = this.referenceToParent ? this.referenceToParent.name : 'none';
        console.log(`<Composite>\tname:${this.name}\tParent:\t${parent}\tComponents:${this.components.length}`);
        this.components.forEach((component) => {
            component.method();
        });
    }
    attach(component) {
        // Detach leaf / composite from any current parent reference and
        // then set the parent reference to this composite(self)
        component.detach();
        component.referenceToParent = this;
        this.components.push(component);
    }
    delete(component) {
        // Removes leaf/composite from this composite self.components
        const index = this.components.indexOf(component);
        if (index > -1) {
            this.components.splice(index, 1);
        }
    }
    detach() {
        // Detaching this composite from its parent composite
        if (this.referenceToParent) {
            this.referenceToParent.delete(this);
            this.referenceToParent = undefined;
        }
    }
}
// The Client
const LEAF_A = new Leaf('leaf-a');
const LEAF_B = new Leaf('leaf-b');
const COMPOSITE_1 = new Composite('comp-1');
const COMPOSITE_2 = new Composite('comp-2');
// Attach LEAF_A to COMPOSITE_1
COMPOSITE_1.attach(LEAF_A);
// Instead, attach LEAF_A to COMPOSITE_2
COMPOSITE_2.attach(LEAF_A);
// Attach COMPOSITE1 to COMPOSITE_2
COMPOSITE_2.attach(COMPOSITE_1);
// Run the methods that 
LEAF_B.method(); // not in any composites
COMPOSITE_2.method(); // COMPOSITE_2 contains both COMPOSITE_1 and LEAF_A
