"use strict";
// An abstract document containing a combination of hooks and abstract methods
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractDocument = void 0;
class AbstractDocument {
    constructor() {
        // A template class containing a template method and primitive methods
        this.document = {};
    }
    // Optional
    backgroundColour(document) {
        // Optional with a default behavior
        document['bg-col'] = 'white';
    }
    // Optional
    print(document) {
        // Optional with a default behavior"
        console.log('----------------------');
        Object.keys(document).forEach((attribute) => {
            console.log(`${attribute}\t: ${document[attribute]}`);
        });
        console.log();
    }
    createDocument(text) {
        // The template method
        this.title(this.document);
        if (this.description)
            this.description(this.document);
        if (this.author)
            this.author(this.document);
        this.backgroundColour(this.document);
        this.text(this.document, text);
        if (this.footer)
            this.footer(this.document);
        this.print(this.document);
    }
}
exports.AbstractDocument = AbstractDocument;
