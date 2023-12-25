"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _AbstractCarPart_name, _AbstractCarPart_sku, _AbstractCarPart_price;
Object.defineProperty(exports, "__esModule", { value: true });
class AbstractCarPart {
    constructor(name, sku, price) {
        // The Abstract Car Part
        _AbstractCarPart_name.set(this, void 0);
        _AbstractCarPart_sku.set(this, void 0);
        _AbstractCarPart_price.set(this, void 0);
        __classPrivateFieldSet(this, _AbstractCarPart_name, name, "f");
        __classPrivateFieldSet(this, _AbstractCarPart_sku, sku, "f");
        __classPrivateFieldSet(this, _AbstractCarPart_price, price, "f");
    }
    get name() {
        return __classPrivateFieldGet(this, _AbstractCarPart_name, "f");
    }
    set name(value) {
        __classPrivateFieldSet(this, _AbstractCarPart_name, value, "f");
    }
    get sku() {
        return __classPrivateFieldGet(this, _AbstractCarPart_sku, "f");
    }
    set sku(value) {
        __classPrivateFieldSet(this, _AbstractCarPart_sku, value, "f");
    }
    get price() {
        return __classPrivateFieldGet(this, _AbstractCarPart_price, "f");
    }
    set price(value) {
        __classPrivateFieldSet(this, _AbstractCarPart_price, value, "f");
    }
    accept(visitor) {
        visitor.visit(this);
    }
}
_AbstractCarPart_name = new WeakMap(), _AbstractCarPart_sku = new WeakMap(), _AbstractCarPart_price = new WeakMap();
exports.default = AbstractCarPart;
