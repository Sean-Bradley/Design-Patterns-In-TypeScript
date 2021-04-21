"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SwitchOffCommand {
    constructor(light) {
        this.light = light;
    }
    execute() {
        this.light.turnOff();
    }
}
exports.default = SwitchOffCommand;
