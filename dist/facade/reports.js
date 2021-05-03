"use strict";
// A Singleton Dictionary of Reported Events
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var _reports, _rowId;
Object.defineProperty(exports, "__esModule", { value: true });
class Reports {
    constructor() {
        _reports.set(this, {});
        _rowId.set(this, 0);
        if (Reports.instance) {
            return Reports.instance;
        }
        Reports.instance = this;
    }
    getHistory() {
        return __classPrivateFieldGet(this, _reports);
    }
    logEvent(event) {
        __classPrivateFieldGet(this, _reports)[__classPrivateFieldGet(this, _rowId)] = [Date.now(), event];
        __classPrivateFieldSet(this, _rowId, __classPrivateFieldGet(this, _rowId) + 1);
        return true;
    }
}
exports.default = Reports;
_reports = new WeakMap(), _rowId = new WeakMap();
