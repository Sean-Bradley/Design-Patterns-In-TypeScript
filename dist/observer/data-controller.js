"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataController = void 0;
class DataController {
    constructor() {
        this.observers = new Set();
        if (DataController.instance) {
            return DataController.instance;
        }
        DataController.instance = this;
    }
    subscribe(observer) {
        this.observers.add(observer);
    }
    unsubscribe(observer) {
        this.observers.delete(observer);
    }
    notify(data) {
        this.observers.forEach((observer) => {
            observer.notify(data);
        });
    }
}
exports.DataController = DataController;
