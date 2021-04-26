"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const abstract_document_1 = require("./abstract-document");
class TextDocument extends abstract_document_1.AbstractDocument {
    title(document) {
        document['title'] = 'New Text Document';
    }
    text(document, text) {
        document['text'] = text;
    }
    footer(document) {
        document['footer'] = '-- Page 1 --';
    }
}
exports.default = TextDocument;
