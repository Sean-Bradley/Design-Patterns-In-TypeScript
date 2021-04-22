// An abstract document containing a combination of hooks and abstract methods
export interface Document {
    [id: string]: string
}

export abstract class AbstractDocument {
    // A template class containing a template method and primitive methods

    document: Document = {}

    abstract title(document: Document): void
    //must implement"

    description(document: Document): void { }
    //optional"

    author(document: Document): void { }
    // optional

    backgroundColour(document: Document): void {
        // optional with a default behavior
        document["bg-col"] = "white"
    }

    abstract text(document: Document, text: string): void
    // must implement

    footer(document: Document): void { }
    //"optional"


    print(document: Document): void {
        //optional with a default behavior"
        console.log("----------------------")
        Object.keys(document).forEach((attribute: string) => {
            console.log(`${attribute}\t: ${document[attribute]}`)
        })
        console.log()
    }

    createDocument(text: string) {
        // The template method
        //const document: AbstractDocument = {} //new AbstractDocument()
        this.title(this.document)
        this.description(this.document)
        this.author(this.document)
        this.backgroundColour(this.document)
        this.text(this.document, text)
        this.footer(this.document)
        this.print(this.document)
    }
}