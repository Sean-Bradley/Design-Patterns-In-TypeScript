"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractDocument = void 0;
class AbstractDocument {
    constructor() {
        // A template class containing a template method and primitive methods
        this.document = {};
    }
    //must implement"
    description(document) { }
    //optional"
    author(document) { }
    // optional
    backgroundColour(document) {
        // optional with a default behavior
        document["bg-col"] = "white";
    }
    // must implement
    footer(document) { }
    //"optional"
    print(document) {
        //optional with a default behavior"
        console.log("----------------------");
        Object.keys(document).forEach((attribute) => {
            console.log(`${attribute}\t: ${document[attribute]}`);
        });
        console.log();
    }
    createDocument(text) {
        // The template method
        //const document: AbstractDocument = {} //new AbstractDocument()
        this.title(this.document);
        this.description(this.document);
        this.author(this.document);
        this.backgroundColour(this.document);
        this.text(this.document, text);
        this.footer(this.document);
        this.print(this.document);
    }
}
exports.AbstractDocument = AbstractDocument;
