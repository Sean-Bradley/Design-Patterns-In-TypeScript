import IComponent from './icomponent'
import Folder from './folder'

export default class File implements IComponent {
    // The File Class. The files are the leaves

    name: string
    referenceToParent?: Folder = undefined

    constructor(name: string) {
        this.name = name
    }

    dir(indent: string): void {
        console.log(`${indent}<FILE> ${this.name}`)
    }

    detach(): void {
        'Detaching this leaf from its parent composite'
        if (this.referenceToParent) {
            this.referenceToParent.delete(this)
        }
    }
}
