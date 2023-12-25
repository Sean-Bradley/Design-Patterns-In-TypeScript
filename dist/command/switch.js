"use strict";
// The Switch (Invoker) Class.
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
var _Switch_commands, _Switch_history;
Object.defineProperty(exports, "__esModule", { value: true });
class Switch {
    constructor() {
        _Switch_commands.set(this, void 0);
        _Switch_history.set(this, void 0);
        __classPrivateFieldSet(this, _Switch_commands, {}, "f");
        __classPrivateFieldSet(this, _Switch_history, [], "f");
    }
    showHistory() {
        // Print the history of each time a command was invoked"
        __classPrivateFieldGet(this, _Switch_history, "f").forEach((row) => {
            console.log(`${row[0]} : ${row[1]}`);
        });
    }
    register(commandName, command) {
        // Register commands in the Invoker
        __classPrivateFieldGet(this, _Switch_commands, "f")[commandName] = command;
    }
    execute(commandName) {
        // Execute any registered commands
        if (commandName in __classPrivateFieldGet(this, _Switch_commands, "f")) {
            __classPrivateFieldGet(this, _Switch_commands, "f")[commandName].execute();
            __classPrivateFieldGet(this, _Switch_history, "f").push([Date.now(), commandName]);
        }
        else {
            console.log(`Command [${commandName}] not recognised`);
        }
    }
    replayLast(numberOfCommands) {
        // Replay the last N commands
        const commands = __classPrivateFieldGet(this, _Switch_history, "f").slice(__classPrivateFieldGet(this, _Switch_history, "f").length - numberOfCommands, __classPrivateFieldGet(this, _Switch_history, "f").length);
        commands.forEach((command) => {
            __classPrivateFieldGet(this, _Switch_commands, "f")[command[1]].execute();
            // or if you wanted to also record this replay in history
            // this.execute(command[1])
        });
    }
}
_Switch_commands = new WeakMap(), _Switch_history = new WeakMap();
exports.default = Switch;
