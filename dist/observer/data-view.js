"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableView = exports.PieGraphView = exports.BarGraphView = void 0;
class BarGraphView {
    constructor(observable) {
        this.observable = observable;
        this.id = this.observable.subscribe(this);
    }
    notify(data) {
        console.log(`BarGraph, id:${this.id}`);
        this.draw(data);
    }
    draw(data) {
        console.log(`Drawing a Bar graph using data:${JSON.stringify(data)}`);
    }
    delete() {
        this.observable.unsubscribe(this.id);
    }
}
exports.BarGraphView = BarGraphView;
class PieGraphView {
    constructor(observable) {
        this.observable = observable;
        this.id = this.observable.subscribe(this);
    }
    notify(data) {
        console.log(`PieGraph, id:${this.id}`);
        this.draw(data);
    }
    draw(data) {
        console.log(`Drawing a Pie graph using data:${data}`);
    }
    delete() {
        this.observable.unsubscribe(this.id);
    }
}
exports.PieGraphView = PieGraphView;
class TableView {
    constructor(observable) {
        this.observable = observable;
        this.id = this.observable.subscribe(this);
    }
    notify(data) {
        console.log(`TableView, id:${this.id}`);
        this.draw(data);
    }
    draw(data) {
        console.log(`Drawing a Table using data:${JSON.stringify(data)}`);
    }
    delete() {
        this.observable.unsubscribe(this.id);
    }
}
exports.TableView = TableView;
