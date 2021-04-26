"use strict";
// The Flyweight Concept
class Flyweight {
    constructor(code) {
        this.code = code;
    }
}
class FlyweightFactory {
    static getFlyweight(code) {
        // A static method to get a flyweight based on a code
        if (!(code in FlyweightFactory.flyweights)) {
            FlyweightFactory.flyweights[code] = new Flyweight(code);
        }
        return FlyweightFactory.flyweights[code];
    }
    static getCount() {
        // Return the number of flyweights in the cache
        return Object.keys(FlyweightFactory.flyweights).length;
    }
}
// Creating the FlyweightFactory as a static class
FlyweightFactory.flyweights = {};
class AppContext {
    constructor(codes) {
        // An example context that holds references to the flyweights in a
        // particular order and converts the code to an ascii letter
        this.codes = [];
        for (let i = 0; i < codes.length; i++) {
            this.codes.push(codes.charCodeAt(i));
        }
    }
    output() {
        // The context specific output that uses flyweights
        let ret = '';
        this.codes.forEach((c) => {
            ret = ret + String.fromCharCode(FlyweightFactory.getFlyweight(c).code);
        });
        return ret;
    }
}
// The Client
const APP_CONTEXT = new AppContext('abracadabra');
// use flyweights in a context
console.log(APP_CONTEXT.output());
console.log(`abracadabra has ${'abracadabra'.length} letters`);
console.log(`FlyweightFactory has ${FlyweightFactory.getCount()} flyweights`);
