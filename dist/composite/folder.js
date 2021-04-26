"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Folder {
    constructor(name) {
        this.name = name;
        this.components = [];
    }
    dir(indent) {
        console.log(`${indent}<DIR>  ${this.name}`);
        this.components.forEach((component) => {
            component.dir(indent + '..');
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
exports.default = Folder;
