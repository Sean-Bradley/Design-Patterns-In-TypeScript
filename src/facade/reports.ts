// A Singleton Dictionary of Reported Events

export default class Reports {
    private static instance: Reports
    private reports: { [id: string]: [number, string] } = {}
    private row_id = 0

    constructor() {
        if (Reports.instance) {
            return Reports.instance
        }
        Reports.instance = this
    }

    getHistory(): { [id: string]: [number, string] } {
        return this.reports
    }

    logEvent(event: string): boolean {
        this.reports[this.row_id] = [Date.now(), event]
        this.row_id = this.row_id + 1
        return true
    }
}
