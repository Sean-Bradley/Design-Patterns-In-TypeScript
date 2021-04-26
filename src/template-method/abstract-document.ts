// An abstract document containing a combination of hooks and abstract methods

export interface Document {
    [id: string]: string
}

export abstract class AbstractDocument {
    // A template class containing a template method and primitive methods

    document: Document = {}

    abstract title(document: Document): void
    // Must implement

    description?(document: Document): void
    // Optional

    author?(document: Document): void
    // Optional

    backgroundColour(document: Document): void {
        // Optional with a default behavior
        document['bg-col'] = 'white'
    }

    abstract text(document: Document, text: string): void
    // Must implement

    footer?(document: Document): void
    // Optional

    print(document: Document): void {
        // Optional with a default behavior"
        console.log('----------------------')
        Object.keys(document).forEach((attribute: string) => {
            console.log(`${attribute}\t: ${document[attribute]}`)
        })
        console.log()
    }

    createDocument(text: string): void {
        // The template method
        this.title(this.document)
        if (this.description) this.description(this.document)
        if (this.author) this.author(this.document)
        this.backgroundColour(this.document)
        this.text(this.document, text)
        if (this.footer) this.footer(this.document)
        this.print(this.document)
    }
}
