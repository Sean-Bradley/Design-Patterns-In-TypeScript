"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _observers;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataController = void 0;
class DataController {
    constructor() {
        _observers.set(this, new Set());
        if (DataController.instance) {
            return DataController.instance;
        }
        DataController.instance = this;
    }
    subscribe(observer) {
        __classPrivateFieldGet(this, _observers).add(observer);
    }
    unsubscribe(observer) {
        __classPrivateFieldGet(this, _observers).delete(observer);
    }
    notify(data) {
        __classPrivateFieldGet(this, _observers).forEach((observer) => {
            observer.notify(data);
        });
    }
}
exports.DataController = DataController;
_observers = new WeakMap();
