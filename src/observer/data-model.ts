import { IDataController, DataController } from './data-controller'
import { IDataView } from './data-view'

export interface IDataModel {
    // A Subject Interface
    subscribe(observer: IDataView): number
    unsubscribe(observerId: number): void
    notify(data: number[]): void
}

export class DataModel implements IDataModel {
    // A Subject (a.k.a Observable)

    #observers: { [id: number]: IDataView } = {}
    #dataController: IDataController
    #counter: number

    constructor() {
        this.#counter = 0
        this.#dataController = new DataController()
        this.#dataController.subscribe(this)
    }

    subscribe(observer: IDataView): number {
        this.#counter++
        this.#observers[this.#counter] = observer
        return this.#counter
    }

    unsubscribe(observerId: number): void {
        delete this.#observers[observerId]
    }

    notify(data: number[]): void {
        Object.keys(this.#observers).forEach((observer) => {
            this.#observers[parseInt(observer)].notify(data)
        })
    }
}
