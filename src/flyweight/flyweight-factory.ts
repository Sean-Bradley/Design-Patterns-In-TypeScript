import Flyweight from './flyweight'

export default class FlyweightFactory {
    // Creating the FlyweightFactory as a static class

    static flyweights: { [id: number]: Flyweight } = {}

    static getFlyweight(code: number): Flyweight {
        // A static method to get a flyweight based on a code
        if (!(code in FlyweightFactory.flyweights)) {
            FlyweightFactory.flyweights[code] = new Flyweight(code)
        }
        return FlyweightFactory.flyweights[code]
    }

    static getCount(): number {
        // Return the number of flyweights in the cache
        return Object.keys(FlyweightFactory.flyweights).length
    }
}
