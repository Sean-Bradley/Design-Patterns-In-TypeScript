"use strict";
'Memento pattern concept';
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
var _Originator_state, _CareTaker_originator, _CareTaker_mementos;
class Memento {
    constructor(state) {
        this.state = state;
    }
}
class Originator {
    constructor() {
        // The Object in the application whose state changes
        _Originator_state.set(this, void 0);
        __classPrivateFieldSet(this, _Originator_state, '', "f");
    }
    get state() {
        return __classPrivateFieldGet(this, _Originator_state, "f");
    }
    set state(value) {
        __classPrivateFieldSet(this, _Originator_state, value, "f");
        console.log(`Originator: Set state to '${value}'`);
    }
    get memento() {
        console.log('Originator: Providing Memento of state to caretaker.');
        return new Memento(__classPrivateFieldGet(this, _Originator_state, "f"));
    }
    set memento(value) {
        __classPrivateFieldSet(this, _Originator_state, value.state, "f");
        console.log(`Originator: State after restoring from Memento: '${__classPrivateFieldGet(this, _Originator_state, "f")}'`);
    }
}
_Originator_state = new WeakMap();
class CareTaker {
    constructor(originator) {
        // Guardian. Provides a narrow interface to the mementos
        _CareTaker_originator.set(this, void 0);
        _CareTaker_mementos.set(this, void 0);
        __classPrivateFieldSet(this, _CareTaker_originator, originator, "f");
        __classPrivateFieldSet(this, _CareTaker_mementos, [], "f");
    }
    create() {
        // Store a new Memento of the Originators current state
        console.log('CareTaker: Getting a copy of Originators current state');
        const memento = __classPrivateFieldGet(this, _CareTaker_originator, "f").memento;
        __classPrivateFieldGet(this, _CareTaker_mementos, "f").push(memento);
    }
    restore(index) {
        // Replace the Originators current state with the state stored in the saved Memento
        console.log('CareTaker: Restoring Originators state from Memento');
        const memento = __classPrivateFieldGet(this, _CareTaker_mementos, "f")[index];
        __classPrivateFieldGet(this, _CareTaker_originator, "f").memento = memento;
    }
}
_CareTaker_originator = new WeakMap(), _CareTaker_mementos = new WeakMap();
// The Client
const ORIGINATOR = new Originator();
const CARETAKER = new CareTaker(ORIGINATOR);
// originators state can change periodically due to application events
ORIGINATOR.state = 'State #1';
ORIGINATOR.state = 'State #2';
// lets backup the originators
CARETAKER.create();
// more changes, and then another backup
ORIGINATOR.state = 'State #3';
CARETAKER.create();
// more changes
ORIGINATOR.state = 'State #4';
console.log(ORIGINATOR.state);
// restore from first backup
CARETAKER.restore(0);
console.log(ORIGINATOR.state);
// restore from second backup
CARETAKER.restore(1);
console.log(ORIGINATOR.state);
