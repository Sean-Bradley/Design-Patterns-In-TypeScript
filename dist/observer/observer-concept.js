"use strict";
// Observer Design Pattern Concept
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Subject_observers, _Observer_id;
class Subject {
    constructor() {
        // The Subject (a.k.a Observable)
        _Subject_observers.set(this, void 0);
        __classPrivateFieldSet(this, _Subject_observers, new Set(), "f");
    }
    subscribe(observer) {
        __classPrivateFieldGet(this, _Subject_observers, "f").add(observer);
    }
    unsubscribe(observer) {
        __classPrivateFieldGet(this, _Subject_observers, "f").delete(observer);
    }
    notify(...args) {
        __classPrivateFieldGet(this, _Subject_observers, "f").forEach((observer) => {
            observer.notify(...args);
        });
    }
}
_Subject_observers = new WeakMap();
class Observer {
    constructor(observable) {
        // The concrete observer
        _Observer_id.set(this, void 0);
        __classPrivateFieldSet(this, _Observer_id, COUNTER++, "f");
        observable.subscribe(this);
    }
    notify(...args) {
        console.log(`OBSERVER_${__classPrivateFieldGet(this, _Observer_id, "f")} received ${JSON.stringify(args)}`);
    }
}
_Observer_id = new WeakMap();
// The Client
let COUNTER = 1; // An ID to help distinguish between objects
const SUBJECT = new Subject();
const OBSERVER_1 = new Observer(SUBJECT);
const OBSERVER_2 = new Observer(SUBJECT);
SUBJECT.notify('First Notification', [1, 2, 3]);
// Unsubscribe OBSERVER_2
SUBJECT.unsubscribe(OBSERVER_2);
SUBJECT.notify('Second Notification', { A: 1, B: 2, C: 3 });
