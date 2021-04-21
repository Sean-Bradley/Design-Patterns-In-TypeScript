"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataController = void 0;
class DataController {
    constructor() {
        this.observers = [];
        if (DataController.instance) {
            return DataController.instance;
        }
        DataController.instance = this;
    }
    subscribe(observer) {
        this.observers.push(observer);
    }
    unsubscribe(observer) {
        const index = this.observers.indexOf(observer);
        if (index > -1) {
            this.observers.splice(index, 1);
        }
    }
    notify(data) {
        this.observers.forEach(observer => {
            observer.notify(data);
        });
    }
}
exports.DataController = DataController;
