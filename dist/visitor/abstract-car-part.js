"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _name, _sku, _price;
Object.defineProperty(exports, "__esModule", { value: true });
class AbstractCarPart {
    constructor(name, sku, price) {
        // The Abstract Car Part
        _name.set(this, void 0);
        _sku.set(this, void 0);
        _price.set(this, void 0);
        __classPrivateFieldSet(this, _name, name);
        __classPrivateFieldSet(this, _sku, sku);
        __classPrivateFieldSet(this, _price, price);
    }
    get name() {
        return __classPrivateFieldGet(this, _name);
    }
    set name(value) {
        __classPrivateFieldSet(this, _name, value);
    }
    get sku() {
        return __classPrivateFieldGet(this, _sku);
    }
    set sku(value) {
        __classPrivateFieldSet(this, _sku, value);
    }
    get price() {
        return __classPrivateFieldGet(this, _price);
    }
    set price(value) {
        __classPrivateFieldSet(this, _price, value);
    }
    accept(visitor) {
        visitor.visit(this);
    }
}
exports.default = AbstractCarPart;
_name = new WeakMap(), _sku = new WeakMap(), _price = new WeakMap();
