// Observer Design Pattern Concept

interface IObservable {
    // The Subject Interface

    subscribe(observer: IObserver): void
    // The subscribe method

    unsubscribe(observer: IObserver): void
    // The unsubscribe method

    notify(...args: unknown[]): void
    // The notify method
}

class Subject implements IObservable {
    // The Subject (a.k.a Observable)
    #observers: Set<IObserver>
    constructor() {
        this.#observers = new Set()
    }

    subscribe(observer: IObserver) {
        this.#observers.add(observer)
    }

    unsubscribe(observer: IObserver) {
        this.#observers.delete(observer)
    }

    notify(...args: unknown[]) {
        this.#observers.forEach((observer) => {
            observer.notify(...args)
        })
    }
}

interface IObserver {
    // A method for the Observer to implement

    notify(...args: unknown[]): void
    // Receive notifications"
}

class Observer implements IObserver {
    // The concrete observer
    #id: number

    constructor(observable: IObservable) {
        this.#id = COUNTER++
        observable.subscribe(this)
    }

    notify(...args: unknown[]) {
        console.log(`OBSERVER_${this.#id} received ${JSON.stringify(args)}`)
    }
}

// The Client
let COUNTER = 1 // An ID to help distinguish between objects

const SUBJECT = new Subject()
const OBSERVER_1 = new Observer(SUBJECT)
const OBSERVER_2 = new Observer(SUBJECT)

SUBJECT.notify('First Notification', [1, 2, 3])

// Unsubscribe OBSERVER_2
SUBJECT.unsubscribe(OBSERVER_2)

SUBJECT.notify('Second Notification', { A: 1, B: 2, C: 3 })
