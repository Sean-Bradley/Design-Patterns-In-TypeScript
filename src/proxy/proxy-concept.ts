// A Proxy Concept Example

interface ISubject {
    // An interface implemented by both the Proxy and Real Subject
    request(): void
    // A method to implement
}

class RealSubject implements ISubject {
    // The actual real object that the proxy is representing

    enormous_data: number[]

    constructor() {
        // hypothetically enormous amounts of data
        this.enormous_data = [1, 2, 3]
    }

    request() {
        return this.enormous_data
    }
}

class ProxySubject implements ISubject {
    // In this case the proxy will act as a cache for
    // `enormous_data` and only populate the enormous_data when it
    // is actually necessary

    enormous_data: number[]
    real_subject: RealSubject

    constructor() {
        this.enormous_data = []
        this.real_subject = new RealSubject()
    }
    request() {
        // Using the proxy as a cache, and loading data into it only if
        // it is needed
        if (this.enormous_data.length === 0) {
            console.log('pulling data from RealSubject')
            this.enormous_data = this.real_subject.request()
            return this.enormous_data
        }
        console.log('pulling data from Proxy cache')
        return this.enormous_data
    }
}

// The Client
const PROXY_SUBJECT = new ProxySubject()
// Use the Subject. First time it will load the enormous amounts of data
console.log(PROXY_SUBJECT.request())
// Use the Subject again, but this time it retrieves it from the local cache
console.log(PROXY_SUBJECT.request())
