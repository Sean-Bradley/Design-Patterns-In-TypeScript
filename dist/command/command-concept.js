"use strict";
// The Command Pattern Concept
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
var _Invoker_commands, _Command1_receiver, _Command2_receiver;
class Invoker {
    constructor() {
        // The Invoker Class
        _Invoker_commands.set(this, void 0);
        __classPrivateFieldSet(this, _Invoker_commands, {}, "f");
    }
    register(commandName, command) {
        // Register commands in the Invoker
        __classPrivateFieldGet(this, _Invoker_commands, "f")[commandName] = command;
    }
    execute(commandName) {
        // Execute any registered commands
        if (commandName in __classPrivateFieldGet(this, _Invoker_commands, "f")) {
            __classPrivateFieldGet(this, _Invoker_commands, "f")[commandName].execute();
        }
        else {
            console.log(`Command [${commandName}] not recognised`);
        }
    }
}
_Invoker_commands = new WeakMap();
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
        _Command1_receiver.set(this, void 0);
        __classPrivateFieldSet(this, _Command1_receiver, receiver, "f");
    }
    execute() {
        __classPrivateFieldGet(this, _Command1_receiver, "f").runCommand1();
    }
}
_Command1_receiver = new WeakMap();
class Command2 {
    constructor(receiver) {
        // A Command object, that implements the ICommand interface and
        // runs the command on the designated receiver
        _Command2_receiver.set(this, void 0);
        __classPrivateFieldSet(this, _Command2_receiver, receiver, "f");
    }
    execute() {
        __classPrivateFieldGet(this, _Command2_receiver, "f").runCommand2();
    }
}
_Command2_receiver = new WeakMap();
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
