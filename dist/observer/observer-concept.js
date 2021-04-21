"use strict";
// Observer Design Pattern Concept
var ObserverConcept;
(function (ObserverConcept) {
    class Subject {
        constructor() {
            this.observers = [];
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
        notify(...args) {
            this.observers.forEach(observer => {
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
            console.log(`Observer id:${this.id} received ${JSON.stringify(args)}`);
        }
    }
    // The Client
    let COUNTER = 1; //An ID to help distinguish between objects
    const SUBJECT = new Subject();
    const OBSERVER_1 = new Observer(SUBJECT);
    const OBSERVER_2 = new Observer(SUBJECT);
    SUBJECT.notify("First Notification", [1, 2, 3]);
    //Unsubscribe OBSERVER_1
    SUBJECT.unsubscribe(OBSERVER_1);
    SUBJECT.notify("Second Notification", { "A": 1, "B": 2, "C": 3 });
})(ObserverConcept || (ObserverConcept = {}));
