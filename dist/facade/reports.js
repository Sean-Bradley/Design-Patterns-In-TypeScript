"use strict";
// A Singleton Dictionary of Reported Events
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Reports_reports, _Reports_rowId;
Object.defineProperty(exports, "__esModule", { value: true });
class Reports {
    constructor() {
        _Reports_reports.set(this, {});
        _Reports_rowId.set(this, 0);
        if (Reports.instance) {
            return Reports.instance;
        }
        Reports.instance = this;
    }
    getHistory() {
        return __classPrivateFieldGet(this, _Reports_reports, "f");
    }
    logEvent(event) {
        __classPrivateFieldGet(this, _Reports_reports, "f")[__classPrivateFieldGet(this, _Reports_rowId, "f")] = [Date.now(), event];
        __classPrivateFieldSet(this, _Reports_rowId, __classPrivateFieldGet(this, _Reports_rowId, "f") + 1, "f");
        return true;
    }
}
_Reports_reports = new WeakMap(), _Reports_rowId = new WeakMap();
exports.default = Reports;
