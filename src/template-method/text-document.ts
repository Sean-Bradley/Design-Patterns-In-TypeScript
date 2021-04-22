import { Document, AbstractDocument } from "./abstract-document"

export default class TextDocument extends AbstractDocument {
    // Prints out a text document
    title(document: Document) {
        document['title'] = 'New Text Document'
    }

    text(document: Document, text: string) {
        document['text'] = text
    }

    footer(document: Document) {
        document['footer'] = '-- Page 1 --'
    }
}