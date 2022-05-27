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
var _BarGraphView_observable, _BarGraphView_id, _PieGraphView_observable, _PieGraphView_id, _TableView_observable, _TableView_id;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableView = exports.PieGraphView = exports.BarGraphView = void 0;
class BarGraphView {
    constructor(observable) {
        // A concrete observer
        _BarGraphView_observable.set(this, void 0);
        _BarGraphView_id.set(this, void 0);
        __classPrivateFieldSet(this, _BarGraphView_observable, observable, "f");
        __classPrivateFieldSet(this, _BarGraphView_id, __classPrivateFieldGet(this, _BarGraphView_observable, "f").subscribe(this), "f");
    }
    notify(data) {
        console.log(`BarGraph, id:${__classPrivateFieldGet(this, _BarGraphView_id, "f")}`);
        this.draw(data);
    }
    draw(data) {
        console.log(`Drawing a Bar graph using data:${JSON.stringify(data)}`);
    }
    delete() {
        __classPrivateFieldGet(this, _BarGraphView_observable, "f").unsubscribe(__classPrivateFieldGet(this, _BarGraphView_id, "f"));
    }
}
exports.BarGraphView = BarGraphView;
_BarGraphView_observable = new WeakMap(), _BarGraphView_id = new WeakMap();
class PieGraphView {
    constructor(observable) {
        // A concrete observer
        _PieGraphView_observable.set(this, void 0);
        _PieGraphView_id.set(this, void 0);
        __classPrivateFieldSet(this, _PieGraphView_observable, observable, "f");
        __classPrivateFieldSet(this, _PieGraphView_id, __classPrivateFieldGet(this, _PieGraphView_observable, "f").subscribe(this), "f");
    }
    notify(data) {
        console.log(`PieGraph, id:${__classPrivateFieldGet(this, _PieGraphView_id, "f")}`);
        this.draw(data);
    }
    draw(data) {
        console.log(`Drawing a Pie graph using data:${data}`);
    }
    delete() {
        __classPrivateFieldGet(this, _PieGraphView_observable, "f").unsubscribe(__classPrivateFieldGet(this, _PieGraphView_id, "f"));
    }
}
exports.PieGraphView = PieGraphView;
_PieGraphView_observable = new WeakMap(), _PieGraphView_id = new WeakMap();
class TableView {
    constructor(observable) {
        // A concrete observer
        _TableView_observable.set(this, void 0);
        _TableView_id.set(this, void 0);
        __classPrivateFieldSet(this, _TableView_observable, observable, "f");
        __classPrivateFieldSet(this, _TableView_id, __classPrivateFieldGet(this, _TableView_observable, "f").subscribe(this), "f");
    }
    notify(data) {
        console.log(`TableView, id:${__classPrivateFieldGet(this, _TableView_id, "f")}`);
        this.draw(data);
    }
    draw(data) {
        console.log(`Drawing a Table using data:${JSON.stringify(data)}`);
    }
    delete() {
        __classPrivateFieldGet(this, _TableView_observable, "f").unsubscribe(__classPrivateFieldGet(this, _TableView_id, "f"));
    }
}
exports.TableView = TableView;
_TableView_observable = new WeakMap(), _TableView_id = new WeakMap();
