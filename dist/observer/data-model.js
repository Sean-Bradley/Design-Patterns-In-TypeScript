"use strict";
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
var _DataModel_observers, _DataModel_dataController, _DataModel_counter;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataModel = void 0;
const data_controller_1 = require("./data-controller");
class DataModel {
    constructor() {
        // A Subject (a.k.a Observable)
        _DataModel_observers.set(this, {});
        _DataModel_dataController.set(this, void 0);
        _DataModel_counter.set(this, void 0);
        __classPrivateFieldSet(this, _DataModel_counter, 0, "f");
        __classPrivateFieldSet(this, _DataModel_dataController, new data_controller_1.DataController(), "f");
        __classPrivateFieldGet(this, _DataModel_dataController, "f").subscribe(this);
    }
    subscribe(observer) {
        var _a;
        __classPrivateFieldSet(this, _DataModel_counter, (_a = __classPrivateFieldGet(this, _DataModel_counter, "f"), _a++, _a), "f");
        __classPrivateFieldGet(this, _DataModel_observers, "f")[__classPrivateFieldGet(this, _DataModel_counter, "f")] = observer;
        return __classPrivateFieldGet(this, _DataModel_counter, "f");
    }
    unsubscribe(observerId) {
        delete __classPrivateFieldGet(this, _DataModel_observers, "f")[observerId];
    }
    notify(data) {
        Object.keys(__classPrivateFieldGet(this, _DataModel_observers, "f")).forEach((observer) => {
            __classPrivateFieldGet(this, _DataModel_observers, "f")[parseInt(observer)].notify(data);
        });
    }
}
exports.DataModel = DataModel;
_DataModel_observers = new WeakMap(), _DataModel_dataController = new WeakMap(), _DataModel_counter = new WeakMap();
