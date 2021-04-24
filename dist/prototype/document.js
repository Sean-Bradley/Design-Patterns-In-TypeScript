"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Document {
    constructor(name, array) {
        this.name = name;
        this.array = array;
    }
    clone(mode) {
        ' This clone method uses different copy techniques ';
        let array;
        if (mode === 2) {
            // results in a deep copy of the Document
            array = JSON.parse(JSON.stringify(this.array));
        }
        else {
            // default, results in a shallow copy of the Document
            array = Object.assign([], this.array);
        }
        return new Document(this.name, array);
    }
}
exports.default = Document;
