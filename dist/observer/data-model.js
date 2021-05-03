"use strict";
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
var _observers, _dataController, _counter;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataModel = void 0;
const data_controller_1 = require("./data-controller");
class DataModel {
    constructor() {
        // A Subject (a.k.a Observable)
        _observers.set(this, {});
        _dataController.set(this, void 0);
        _counter.set(this, void 0);
        __classPrivateFieldSet(this, _counter, 0);
        __classPrivateFieldSet(this, _dataController, new data_controller_1.DataController());
        __classPrivateFieldGet(this, _dataController).subscribe(this);
    }
    subscribe(observer) {
        __classPrivateFieldSet(this, _counter, +__classPrivateFieldGet(this, _counter) + 1);
        __classPrivateFieldGet(this, _observers)[__classPrivateFieldGet(this, _counter)] = observer;
        return __classPrivateFieldGet(this, _counter);
    }
    unsubscribe(observerId) {
        delete __classPrivateFieldGet(this, _observers)[observerId];
    }
    notify(data) {
        Object.keys(__classPrivateFieldGet(this, _observers)).forEach((observer) => {
            __classPrivateFieldGet(this, _observers)[parseInt(observer)].notify(data);
        });
    }
}
exports.DataModel = DataModel;
_observers = new WeakMap(), _dataController = new WeakMap(), _counter = new WeakMap();
