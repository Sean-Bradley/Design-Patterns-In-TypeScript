"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SwitchOnCommand {
    constructor(light) {
        this.light = light;
    }
    execute() {
        this.light.turnOn();
    }
}
exports.default = SwitchOnCommand;
