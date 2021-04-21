"use strict";
class DataController {
    subscribe(observer) {
        this.observers.push(observer);
    }
    unsubscribe(observer) {
        this.observers.remove(observer);
    }
    notify(...args) {
        this.observers.array.forEach(observer => {
            observer.notify(...args);
        });
    }
}
// A Subject (a.k.a Observable)
DataController.observers = [];
