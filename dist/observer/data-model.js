"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataModel = void 0;
const data_controller_1 = require("./data-controller");
class DataModel {
    constructor() {
        // A Subject (a.k.a Observable)
        this.observers = {};
        this.counter = 0;
        this.dataController = new data_controller_1.DataController();
        this.dataController.subscribe(this);
    }
    subscribe(observer) {
        this.counter++;
        this.observers[this.counter] = observer;
        return this.counter;
    }
    unsubscribe(observerId) {
        delete this.observers[observerId];
    }
    notify(data) {
        Object.keys(this.observers).forEach((observer) => {
            this.observers[parseInt(observer)].notify(data);
        });
    }
}
exports.DataModel = DataModel;
