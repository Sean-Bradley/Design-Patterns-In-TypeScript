"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class File {
    constructor(name) {
        this.referenceToParent = undefined;
        this.name = name;
    }
    dir(indent) {
        console.log(`${indent}<FILE> ${this.name}`);
    }
    detach() {
        'Detaching this leaf from its parent composite';
        if (this.referenceToParent) {
            this.referenceToParent.delete(this);
        }
    }
}
exports.default = File;
