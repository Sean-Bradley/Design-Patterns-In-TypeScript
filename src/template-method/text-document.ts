import { Document, AbstractDocument } from './abstract-document'

export default class TextDocument extends AbstractDocument {
    title(document: Document): void {
        document['title'] = 'New Text Document'
    }

    text(document: Document, text: string): void {
        document['text'] = text
    }

    footer(document: Document): void {
        document['footer'] = '-- Page 1 --'
    }
}
