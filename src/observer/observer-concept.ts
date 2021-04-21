// Observer Design Pattern Concept
module ObserverConcept {

    interface IObservable {
        // The Subject Interface

        subscribe(observer: IObserver): void
        // The subscribe method

        unsubscribe(observer: IObserver): void
        // The unsubscribe method

        notify(...args: any): void
        // The notify method
    }


    class Subject implements IObservable {
        // The Subject (a.k.a Observable)
        observers: IObserver[]
        constructor() {
            this.observers = []
        }

        subscribe(observer: IObserver) {
            this.observers.push(observer)
        }

        unsubscribe(observer: IObserver) {
            const index = this.observers.indexOf(observer);
            if (index > -1) {
                this.observers.splice(index, 1);
            }
        }

        notify(...args: any) {
            this.observers.forEach(observer => {
                observer.notify(...args)
            })
        }
    }

    interface IObserver {
        // A method for the Observer to implement

        notify(...args: any): void
        //Receive notifications"
    }

    class Observer implements IObserver {
        // The concrete observer
        id: number

        constructor(observable: IObservable) {
            this.id = COUNTER++
            observable.subscribe(this)
        }

        notify(...args: any) {
            console.log(`OBSERVER_${this.id} received ${JSON.stringify(args)}`)
        }
    }

    // The Client
    let COUNTER = 1 //An ID to help distinguish between objects

    const SUBJECT = new Subject()
    const OBSERVER_1 = new Observer(SUBJECT)
    const OBSERVER_2 = new Observer(SUBJECT)

    SUBJECT.notify("First Notification", [1, 2, 3])

    //Unsubscribe OBSERVER_2
    SUBJECT.unsubscribe(OBSERVER_2)
    
    SUBJECT.notify("Second Notification", { "A": 1, "B": 2, "C": 3 })
}