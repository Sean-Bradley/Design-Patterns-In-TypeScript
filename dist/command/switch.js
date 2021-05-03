"use strict";
// The Switch (Invoker) Class.
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
var _commands, _history;
Object.defineProperty(exports, "__esModule", { value: true });
class Switch {
    constructor() {
        _commands.set(this, void 0);
        _history.set(this, void 0);
        __classPrivateFieldSet(this, _commands, {});
        __classPrivateFieldSet(this, _history, []);
    }
    showHistory() {
        // Print the history of each time a command was invoked"
        __classPrivateFieldGet(this, _history).forEach((row) => {
            console.log(`${row[0]} : ${row[1]}`);
        });
    }
    register(commandName, command) {
        // Register commands in the Invoker
        __classPrivateFieldGet(this, _commands)[commandName] = command;
    }
    execute(commandName) {
        // Execute any registered commands
        if (commandName in __classPrivateFieldGet(this, _commands)) {
            __classPrivateFieldGet(this, _commands)[commandName].execute();
            __classPrivateFieldGet(this, _history).push([Date.now(), commandName]);
        }
        else {
            console.log(`Command [${commandName}] not recognised`);
        }
    }
    replayLast(numberOfCommands) {
        // Replay the last N commands
        const commands = __classPrivateFieldGet(this, _history).slice(__classPrivateFieldGet(this, _history).length - numberOfCommands, __classPrivateFieldGet(this, _history).length);
        commands.forEach((command) => {
            __classPrivateFieldGet(this, _commands)[command[1]].execute();
            // or if you wanted to also record this replay in history
            // this.execute(command[1])
        });
    }
}
exports.default = Switch;
_commands = new WeakMap(), _history = new WeakMap();
