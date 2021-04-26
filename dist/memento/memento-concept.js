"use strict";
'Memento pattern concept';
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
var _state, _originator, _mementos;
class Memento {
    constructor(state) {
        this.state = state;
    }
}
class Originator {
    constructor() {
        // The Object in the application whose state changes
        _state.set(this, void 0);
        __classPrivateFieldSet(this, _state, '');
    }
    get state() {
        return __classPrivateFieldGet(this, _state);
    }
    set state(value) {
        __classPrivateFieldSet(this, _state, value);
        console.log(`Originator: Set state to '${value}'`);
    }
    get memento() {
        console.log('Originator: Providing Memento of state to caretaker.');
        return new Memento(__classPrivateFieldGet(this, _state));
    }
    set memento(value) {
        __classPrivateFieldSet(this, _state, value.state);
        console.log(`Originator: State after restoring from Memento: '${__classPrivateFieldGet(this, _state)}'`);
    }
}
_state = new WeakMap();
class CareTaker {
    constructor(originator) {
        // Guardian. Provides a narrow interface to the mementos
        _originator.set(this, void 0);
        _mementos.set(this, void 0);
        __classPrivateFieldSet(this, _originator, originator);
        __classPrivateFieldSet(this, _mementos, []);
    }
    create() {
        // Store a new Memento of the Originators current state
        console.log('CareTaker: Getting a copy of Originators current state');
        const memento = __classPrivateFieldGet(this, _originator).memento;
        __classPrivateFieldGet(this, _mementos).push(memento);
    }
    restore(index) {
        // Replace the Originators current state with the state stored in the saved Memento
        console.log('CareTaker: Restoring Originators state from Memento');
        const memento = __classPrivateFieldGet(this, _mementos)[index];
        __classPrivateFieldGet(this, _originator).memento = memento;
    }
}
_originator = new WeakMap(), _mementos = new WeakMap();
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
