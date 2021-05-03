"use strict";
// The Command Pattern Concept
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
var _commands, _receiver, _receiver_1;
class Invoker {
    constructor() {
        // The Invoker Class
        _commands.set(this, void 0);
        __classPrivateFieldSet(this, _commands, {});
    }
    register(commandName, command) {
        // Register commands in the Invoker
        __classPrivateFieldGet(this, _commands)[commandName] = command;
    }
    execute(commandName) {
        // Execute any registered commands
        if (commandName in __classPrivateFieldGet(this, _commands)) {
            __classPrivateFieldGet(this, _commands)[commandName].execute();
        }
        else {
            console.log(`Command [${commandName}] not recognised`);
        }
    }
}
_commands = new WeakMap();
class Receiver {
    // The Receiver
    runCommand1() {
        // A set of instructions to run
        console.log('Executing Command 1');
    }
    runCommand2() {
        // A set of instructions to run
        console.log('Executing Command 2');
    }
}
class Command1 {
    constructor(receiver) {
        // A Command object, that implements the ICommand interface and
        // runs the command on the designated receiver
        _receiver.set(this, void 0);
        __classPrivateFieldSet(this, _receiver, receiver);
    }
    execute() {
        __classPrivateFieldGet(this, _receiver).runCommand1();
    }
}
_receiver = new WeakMap();
class Command2 {
    constructor(receiver) {
        // A Command object, that implements the ICommand interface and
        // runs the command on the designated receiver
        _receiver_1.set(this, void 0);
        __classPrivateFieldSet(this, _receiver_1, receiver);
    }
    execute() {
        __classPrivateFieldGet(this, _receiver_1).runCommand2();
    }
}
_receiver_1 = new WeakMap();
// The Client
// Create a receiver
const RECEIVER = new Receiver();
// Create Commands
const COMMAND1 = new Command1(RECEIVER);
const COMMAND2 = new Command2(RECEIVER);
// Register the commands with the invoker
const INVOKER = new Invoker();
INVOKER.register('1', COMMAND1);
INVOKER.register('2', COMMAND2);
// Execute the commands that are registered on the Invoker
INVOKER.execute('1');
INVOKER.execute('2');
INVOKER.execute('1');
INVOKER.execute('2');
