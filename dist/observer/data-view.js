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
var _observable, _id, _observable_1, _id_1, _observable_2, _id_2;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableView = exports.PieGraphView = exports.BarGraphView = void 0;
class BarGraphView {
    constructor(observable) {
        // A concrete observer
        _observable.set(this, void 0);
        _id.set(this, void 0);
        __classPrivateFieldSet(this, _observable, observable);
        __classPrivateFieldSet(this, _id, __classPrivateFieldGet(this, _observable).subscribe(this));
    }
    notify(data) {
        console.log(`BarGraph, id:${__classPrivateFieldGet(this, _id)}`);
        this.draw(data);
    }
    draw(data) {
        console.log(`Drawing a Bar graph using data:${JSON.stringify(data)}`);
    }
    delete() {
        __classPrivateFieldGet(this, _observable).unsubscribe(__classPrivateFieldGet(this, _id));
    }
}
exports.BarGraphView = BarGraphView;
_observable = new WeakMap(), _id = new WeakMap();
class PieGraphView {
    constructor(observable) {
        // A concrete observer
        _observable_1.set(this, void 0);
        _id_1.set(this, void 0);
        __classPrivateFieldSet(this, _observable_1, observable);
        __classPrivateFieldSet(this, _id_1, __classPrivateFieldGet(this, _observable_1).subscribe(this));
    }
    notify(data) {
        console.log(`PieGraph, id:${__classPrivateFieldGet(this, _id_1)}`);
        this.draw(data);
    }
    draw(data) {
        console.log(`Drawing a Pie graph using data:${data}`);
    }
    delete() {
        __classPrivateFieldGet(this, _observable_1).unsubscribe(__classPrivateFieldGet(this, _id_1));
    }
}
exports.PieGraphView = PieGraphView;
_observable_1 = new WeakMap(), _id_1 = new WeakMap();
class TableView {
    constructor(observable) {
        // A concrete observer
        _observable_2.set(this, void 0);
        _id_2.set(this, void 0);
        __classPrivateFieldSet(this, _observable_2, observable);
        __classPrivateFieldSet(this, _id_2, __classPrivateFieldGet(this, _observable_2).subscribe(this));
    }
    notify(data) {
        console.log(`TableView, id:${__classPrivateFieldGet(this, _id_2)}`);
        this.draw(data);
    }
    draw(data) {
        console.log(`Drawing a Table using data:${JSON.stringify(data)}`);
    }
    delete() {
        __classPrivateFieldGet(this, _observable_2).unsubscribe(__classPrivateFieldGet(this, _id_2));
    }
}
exports.TableView = TableView;
_observable_2 = new WeakMap(), _id_2 = new WeakMap();
