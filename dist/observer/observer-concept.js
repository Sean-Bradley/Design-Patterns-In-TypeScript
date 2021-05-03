"use strict";
// Observer Design Pattern Concept
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _observers, _id;
class Subject {
    constructor() {
        // The Subject (a.k.a Observable)
        _observers.set(this, void 0);
        __classPrivateFieldSet(this, _observers, new Set());
    }
    subscribe(observer) {
        __classPrivateFieldGet(this, _observers).add(observer);
    }
    unsubscribe(observer) {
        __classPrivateFieldGet(this, _observers).delete(observer);
    }
    notify(...args) {
        __classPrivateFieldGet(this, _observers).forEach((observer) => {
            observer.notify(...args);
        });
    }
}
_observers = new WeakMap();
class Observer {
    constructor(observable) {
        // The concrete observer
        _id.set(this, void 0);
        __classPrivateFieldSet(this, _id, COUNTER++);
        observable.subscribe(this);
    }
    notify(...args) {
        console.log(`OBSERVER_${__classPrivateFieldGet(this, _id)} received ${JSON.stringify(args)}`);
    }
}
_id = new WeakMap();
// The Client
let COUNTER = 1; // An ID to help distinguish between objects
const SUBJECT = new Subject();
const OBSERVER_1 = new Observer(SUBJECT);
const OBSERVER_2 = new Observer(SUBJECT);
SUBJECT.notify('First Notification', [1, 2, 3]);
// Unsubscribe OBSERVER_2
SUBJECT.unsubscribe(OBSERVER_2);
SUBJECT.notify('Second Notification', { A: 1, B: 2, C: 3 });
