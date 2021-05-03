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
var _light;
Object.defineProperty(exports, "__esModule", { value: true });
class SwitchOffCommand {
    constructor(light) {
        _light.set(this, void 0);
        __classPrivateFieldSet(this, _light, light);
    }
    execute() {
        __classPrivateFieldGet(this, _light).turnOff();
    }
}
exports.default = SwitchOffCommand;
_light = new WeakMap();
