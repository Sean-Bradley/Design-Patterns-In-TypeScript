// The Subject that all components will stay synchronized with

import IComponent from './icomponent'

export default class Mediator {
    // A Subject whose notify method is mediated
    #components: Set<IComponent>

    constructor() {
        this.#components = new Set()
    }

    add(component: IComponent): void {
        // Add components
        this.#components.add(component)
    }

    notify(message: string, originator: IComponent): void {
        // Add components except for the originator component
        this.#components.forEach((component) => {
            if (component !== originator) {
                component.receive(message)
            }
        })
    }
}
