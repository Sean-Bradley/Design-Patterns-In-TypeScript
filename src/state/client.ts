// The State Use Case Example
module StateUseCase {
    enum State {
        Initializing = "Initializing",
        Started = "Started",
        Running = "Running",
        Finished = "Finished"
    }

    interface IState {
        // A State Interface
        request(): void
    }

    class Context implements IState {
        #state: State

        constructor() {
            this.#state = State.Initializing
            //this.request = Started.prototype.request
        }

        public get state() {
            return this.#state
        }

        public set state(value: State) {
            switch (value) {
                case State.Started:
                    this.request = Started.prototype.request
                    break;
                case State.Running:
                    this.request = Running.prototype.request
                    break;
                case State.Finished:
                    this.request = Finished.prototype.request
                    break;
            }
            this.#state = value
        }

        request() {
            /* Does nothing until state changes, when then 
            this method handle is reassigned to a different
            concrete states request method */
        }
    }

    class Started implements IState {
        // A ConcreteState Subclass
        request() {
            console.log(`I am now Started`)
        }
    }

    class Running implements IState {
        // "A ConcreteState Subclass
        request() {
            console.log(`I am now Running`)
        }
    }

    class Finished implements IState {
        // A ConcreteState Subclass
        request() {
            console.log(`I am now Finished`)
        }
    }

    // The Client
    const CONTEXT = new Context()
    console.log("CONTEXT State = " + CONTEXT.state)
    CONTEXT.state = State.Started
    CONTEXT.request()
    CONTEXT.state = State.Running
    CONTEXT.request()
    CONTEXT.state = State.Finished
    CONTEXT.request()
    CONTEXT.state = State.Started
    CONTEXT.request()
    CONTEXT.state = State.Running
    CONTEXT.request()
    CONTEXT.state = State.Finished
    CONTEXT.request()
}