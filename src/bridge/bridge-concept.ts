// Bridge Pattern Concept Sample Code
module BridgeConcept {
    interface IAbstraction {
        method(...args: any): void
    }

    class RefinedAbstractionA implements IAbstraction {

        implementer: IImplementer

        constructor(implementer: IImplementer) {
            this.implementer = implementer
        }

        method(...args: any) {
            this.implementer.method(...args)
        }
    }

    class RefinedAbstractionB implements IAbstraction {

        implementer: IImplementer

        constructor(implementer: IImplementer) {
            this.implementer = implementer
        }

        method(...args: any) {
            this.implementer.method(...args)
        }
    }

    interface IImplementer {
        method(...args: string[]): void
    }

    class ConcreteImplementerA implements IImplementer {

        method(...args: string[]) {
            console.log(args)
        }
    }

    class ConcreteImplementerB implements IImplementer {

        method(...args: string[]) {
            args.forEach(arg => console.log(arg))
        }
    }

    // The Client
    const VALUES: string[] = ['a', 'b', 'c']

    const REFINED_ABSTRACTION_A = new RefinedAbstractionA(new ConcreteImplementerA)
    REFINED_ABSTRACTION_A.method(...VALUES)

    const REFINED_ABSTRACTION_B = new RefinedAbstractionB(new ConcreteImplementerB)
    REFINED_ABSTRACTION_B.method(...VALUES)
}