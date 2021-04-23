"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FactoryB = void 0;
// FactoryB Sample Code
var FactoryB;
(function (FactoryB) {
    class ConcreteProductA {
        constructor() {
            this.name = 'FactoryB:ConcreteProductA';
        }
        createObject() {
            return this;
        }
    }
    class ConcreteProductB {
        constructor() {
            this.name = 'FactoryB:ConcreteProductB';
        }
        createObject() {
            return this;
        }
    }
    class ConcreteProductC {
        constructor() {
            this.name = 'FactoryB:ConcreteProductC';
        }
        createObject() {
            return this;
        }
    }
    function getObject(some_property) {
        try {
            if (some_property === 'a') {
                return new ConcreteProductA();
            }
            else if (some_property === 'b') {
                return new ConcreteProductB();
            }
            else if (some_property === 'c') {
                return new ConcreteProductC();
            }
            else {
                throw new Error('Class Not Found');
            }
        }
        catch (e) {
            console.log(e);
        }
        return null;
    }
    FactoryB.getObject = getObject;
})(FactoryB = exports.FactoryB || (exports.FactoryB = {}));
