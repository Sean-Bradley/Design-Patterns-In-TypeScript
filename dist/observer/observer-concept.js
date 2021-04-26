"use strict";
// Observer Design Pattern Concept
class Subject {
    constructor() {
        this.observers = new Set();
    }
    subscribe(observer) {
        this.observers.add(observer);
    }
    unsubscribe(observer) {
        this.observers.delete(observer);
    }
    notify(...args) {
        this.observers.forEach((observer) => {
            observer.notify(...args);
        });
    }
}
class Observer {
    constructor(observable) {
        this.id = COUNTER++;
        observable.subscribe(this);
    }
    notify(...args) {
        console.log(`OBSERVER_${this.id} received ${JSON.stringify(args)}`);
    }
}
// The Client
let COUNTER = 1; // An ID to help distinguish between objects
const SUBJECT = new Subject();
const OBSERVER_1 = new Observer(SUBJECT);
const OBSERVER_2 = new Observer(SUBJECT);
SUBJECT.notify('First Notification', [1, 2, 3]);
// Unsubscribe OBSERVER_2
SUBJECT.unsubscribe(OBSERVER_2);
SUBJECT.notify('Second Notification', { A: 1, B: 2, C: 3 });
