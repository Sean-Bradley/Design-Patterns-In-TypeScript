"use strict";
// A Singleton Dictionary of Reported Events
Object.defineProperty(exports, "__esModule", { value: true });
class Reports {
    constructor() {
        this.reports = {};
        this.row_id = 0;
        if (Reports.instance) {
            return Reports.instance;
        }
        Reports.instance = this;
    }
    getHistory() {
        return this.reports;
    }
    logEvent(event) {
        this.reports[this.row_id] = [Date.now(), event];
        this.row_id = this.row_id + 1;
        return true;
    }
}
exports.default = Reports;
