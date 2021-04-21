import { IDataModel } from "./data-model";

// A Data Controller Interface
export interface IDataController {
    // A Subject Interface
    subscribe(observer: IDataModel): void
    unsubscribe(observer: IDataModel): void
    notify(data: number[]): void
}

export class DataController implements IDataController {
    // A Subject (a.k.a Observable)

    static instance: DataController
    observers: IDataModel[] = []

    constructor() {
        if (DataController.instance) {
            return DataController.instance
        }
        DataController.instance = this
    }

    subscribe(observer: IDataModel) {
        this.observers.push(observer)
    }

    unsubscribe(observer: IDataModel) {
        const index = this.observers.indexOf(observer);
        if (index > -1) {
            this.observers.splice(index, 1);
        }
    }

    notify(data: number[]) {
        this.observers.forEach(observer => {
            observer.notify(data)
        });
    }
}