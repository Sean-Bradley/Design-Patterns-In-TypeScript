"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _DataController_observers;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataController = void 0;
class DataController {
    constructor() {
        _DataController_observers.set(this, new Set());
        if (DataController.instance) {
            return DataController.instance;
        }
        DataController.instance = this;
    }
    subscribe(observer) {
        __classPrivateFieldGet(this, _DataController_observers, "f").add(observer);
    }
    unsubscribe(observer) {
        __classPrivateFieldGet(this, _DataController_observers, "f").delete(observer);
    }
    notify(data) {
        __classPrivateFieldGet(this, _DataController_observers, "f").forEach((observer) => {
            observer.notify(data);
        });
    }
}
exports.DataController = DataController;
_DataController_observers = new WeakMap();
