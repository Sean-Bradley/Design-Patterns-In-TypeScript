import {IComponent} from './interface-component'
import {Folder} from './folder'

export class File implements IComponent {
    // The File Class. The files are the leaves

    name: string
    referenceToParent?: IComponent = undefined

    constructor(name: string) {
        this.name = name
    }

    dir(indent: string) {
        console.log(`${indent}<FILE> ${this.name}`)
    }

    detach() {
        'Detaching this leaf from its parent composite'
        if (this.referenceToParent) {
            ;(this.referenceToParent as Folder).delete(this)
        }
    }
}
