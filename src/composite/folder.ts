import { IComponent } from './interface-component'

export class Folder implements IComponent {
    // A composite can contain leaves and composites

    referenceToParent?: IComponent
    name: string
    components: IComponent[]

    constructor(name: string) {
        this.name = name
        this.components = []
    }

    dir(indent: string) {
        const parent_id = this.referenceToParent
        console.log(`${indent}<DIR>  ${this.name}`)

        this.components.forEach(component => {
            component.dir(indent + "..")
        })
    }

    attach(component: IComponent) {
        /*
        * Detach leaf / composite from any current parent reference and
        * then set the parent reference to this composite(self)
        */
        component.detach()
        component.referenceToParent = this
        this.components.push(component)
    }

    delete(component: IComponent) {
        // Removes leaf/composite from this composite self.components
        const index = this.components.indexOf(component);
        if (index > -1) {
            this.components.splice(index, 1)
        }
    }

    detach() {
        // Detaching this composite from its parent composite
        if (this.referenceToParent) {
            (this.referenceToParent as Folder).delete(this)
            this.referenceToParent = undefined
        }
    }
}
