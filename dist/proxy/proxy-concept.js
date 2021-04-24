"use strict";
// A Proxy Concept Example
class RealSubject {
    constructor() {
        // hypothetically enormous amounts of data
        this.enormous_data = [1, 2, 3];
    }
    request() {
        return this.enormous_data;
    }
}
class ProxySubject {
    constructor() {
        this.enormous_data = [];
        this.real_subject = new RealSubject();
    }
    request() {
        /*
         * Using the proxy as a cache, and loading data into it only if
         * it is needed
         */
        if (this.enormous_data.length === 0) {
            console.log('pulling data from RealSubject');
            this.enormous_data = this.real_subject.request();
            return this.enormous_data;
        }
        console.log('pulling data from Proxy cache');
        return this.enormous_data;
    }
}
// The Client
const SUBJECT = new ProxySubject();
// Use the Subject. First time it will load the enormous amounts of data
console.log(SUBJECT.request());
// Use the Subject again, but this time it retrieves it from the local cache
console.log(SUBJECT.request());
