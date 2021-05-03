// A Proxy Concept Example

interface ISubject {
    // An interface implemented by both the Proxy and Real Subject
    request(): void
    // A method to implement
}

class RealSubject implements ISubject {
    // The actual real object that the proxy is representing

    enormousData: number[]

    constructor() {
        // hypothetically enormous amounts of data
        this.enormousData = [1, 2, 3]
    }

    request() {
        return this.enormousData
    }
}

class ProxySubject implements ISubject {
    // In this case the proxy will act as a cache for
    // `enormous_data` and only populate the enormous_data when it
    // is actually necessary

    enormousData: number[]
    realSubject: RealSubject

    constructor() {
        this.enormousData = []
        this.realSubject = new RealSubject()
    }
    request() {
        // Using the proxy as a cache, and loading data into it only if
        // it is needed
        if (this.enormousData.length === 0) {
            console.log('pulling data from RealSubject')
            this.enormousData = this.realSubject.request()
            return this.enormousData
        }
        console.log('pulling data from Proxy cache')
        return this.enormousData
    }
}

// The Client
const PROXY_SUBJECT = new ProxySubject()
// Use the Subject. First time it will load the enormous amounts of data
console.log(PROXY_SUBJECT.request())
// Use the Subject again, but this time it retrieves it from the local cache
console.log(PROXY_SUBJECT.request())
