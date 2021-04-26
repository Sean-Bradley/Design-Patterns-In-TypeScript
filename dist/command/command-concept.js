"use strict";
// The Command Pattern Concept
class Invoker {
    constructor() {
        this.commands = {};
    }
    register(commandName, command) {
        // Register commands in the Invoker
        this.commands[commandName] = command;
    }
    execute(commandName) {
        // Execute any registered commands
        if (commandName in this.commands) {
            this.commands[commandName].execute();
        }
        else {
            console.log(`Command [${commandName}] not recognised`);
        }
    }
}
class Receiver {
    // The Receiver
    runCommand1() {
        // A set of instructions to run
        console.log('Executing Command 1');
    }
    runCommand2() {
        // A set of instructions to run"
        console.log('Executing Command 2');
    }
}
class Command1 {
    constructor(receiver) {
        this.receiver = receiver;
    }
    execute() {
        this.receiver.runCommand1();
    }
}
class Command2 {
    constructor(receiver) {
        this.receiver = receiver;
    }
    execute() {
        this.receiver.runCommand2();
    }
}
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
