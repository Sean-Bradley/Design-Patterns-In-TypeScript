"use strict";
// A Proxy Concept Example
class RealSubject {
    constructor() {
        // hypothetically enormous amounts of data
        this.enormousData = [1, 2, 3];
    }
    request() {
        return this.enormousData;
    }
}
class ProxySubject {
    constructor() {
        this.enormousData = [];
        this.realSubject = new RealSubject();
    }
    request() {
        // Using the proxy as a cache, and loading data into it only if
        // it is needed
        if (this.enormousData.length === 0) {
            console.log('pulling data from RealSubject');
            this.enormousData = this.realSubject.request();
            return this.enormousData;
        }
        console.log('pulling data from Proxy cache');
        return this.enormousData;
    }
}
// The Client
const PROXY_SUBJECT = new ProxySubject();
// Use the Subject. First time it will load the enormous amounts of data
console.log(PROXY_SUBJECT.request());
// Use the Subject again, but this time it retrieves it from the local cache
console.log(PROXY_SUBJECT.request());
