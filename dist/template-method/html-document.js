"use strict";
// A HTML document concrete class of AbstractDocument
Object.defineProperty(exports, "__esModule", { value: true });
const abstract_document_1 = require("./abstract-document");
class HTMLDocument extends abstract_document_1.AbstractDocument {
    title(document) {
        document['title'] = 'New HTML Document';
    }
    text(document, text) {
        // Putting multiple lines into there own p tags
        const lines = text.split('\n');
        let markup = '';
        lines.forEach((line) => {
            markup = markup + '    <p>' + line + '</p>\n';
            document['text'] = markup.substring(0, markup.length - 1);
        });
    }
    print(document) {
        // overriding print to output with html tags
        console.log('<html>');
        console.log('  <head>');
        Object.keys(document).forEach((attribute) => {
            if (['title', 'description', 'author'].indexOf(attribute) > -1) {
                console.log(`    <${attribute}>${document[attribute]}</${attribute}>`);
            }
            if (attribute === 'bg-col') {
                console.log('    <style>');
                console.log('      body {');
                console.log(`        background-color: ${document[attribute]};`);
                console.log('      }');
                console.log('    </style>');
            }
        });
        console.log('  </head>');
        console.log('  <body>');
        console.log(`${document['text']}`);
        console.log('  </body>');
        console.log('</html>');
    }
}
exports.default = HTMLDocument;
