// A HTML document concrete class of AbstractDocument

import { Document, AbstractDocument } from "./abstract-document"

export default class HTMLDocument extends AbstractDocument {
    // Prints out a HTML formatted document
    title(document: Document) {
        document['title'] = 'New HTML Document'
    }

    text(document: Document, text: string) {
        // Putting multiple lines into there own p tags
        const lines = text.split('\n')
        let markup = ""
        lines.forEach(line => {
            markup = markup + '    <p>' + line + '</p>\n'
            document["text"] = markup.substring(0, markup.length - 1)
        })
    }

    print(document: Document) {
        // overriding print to output with html tags
        console.log('<html>')
        console.log('  <head>')
        //for attribute in document:
        Object.keys(document).forEach((attribute: string) => {
            if (["title", "description", "author"].indexOf(attribute) > -1) {
                console.log(`    <${attribute}>${document[attribute]}</${attribute}>`)
            }
            if (attribute === "bg-col") {
                console.log("    <style>")
                console.log("      body {")
                console.log(`        background-color: ${document[attribute]};`)
                console.log("      }")
                console.log("    </style>")
            }
        })
        console.log("  </head>")
        console.log("  <body>")
        console.log(`${document['text']}`)
        console.log("  </body>")
        console.log("</html>")
    }
}