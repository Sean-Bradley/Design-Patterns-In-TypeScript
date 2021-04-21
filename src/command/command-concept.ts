// The Command Pattern Concept
module CommandConcept {
    interface Command {
        execute(): void
    }

    class Invoker {
        // The Invoker Class
        commands: { [id: string]: Command }

        constructor() {
            this.commands = {}
        }

        register(commandName: string, command: Command) {
            // Register commands in the Invoker
            this.commands[commandName] = command
        }

        execute(commandName: string) {
            // Execute any registered commands
            if (commandName in this.commands) {
                this.commands[commandName].execute()
            } else {
                console.log(`Command [${commandName}] not recognised`)
            }
        }
    }

    class Receiver {
        // The Receiver

        run_command_1() {
            // A set of instructions to run
            console.log('Executing Command 1')
        }

        run_command_2() {
            // A set of instructions to run"
            console.log('Executing Command 2')
        }
    }

    class Command1 implements Command {
        /* A Command object, that implements the ICommand interface and
        * runs the command on the designated receiver
        */
        receiver: Receiver

        constructor(receiver: Receiver) {
            this.receiver = receiver
        }

        execute() {
            this.receiver.run_command_1()
        }
    }

    class Command2 implements Command {
        /* A Command object, that implements the ICommand interface and
        * runs the command on the designated receiver
        */
        receiver: Receiver

        constructor(receiver: Receiver) {
            this.receiver = receiver
        }

        execute() {
            this.receiver.run_command_2()
        }
    }

    // The Client
    // Create a receiver
    const RECEIVER = new Receiver()

    // Create Commands
    const COMMAND1 = new Command1(RECEIVER)
    const COMMAND2 = new Command2(RECEIVER)

    // Register the commands with the invoker
    const INVOKER = new Invoker()
    INVOKER.register("1", COMMAND1)
    INVOKER.register("2", COMMAND2)

    // Execute the commands that are registered on the Invoker
    INVOKER.execute("1")
    INVOKER.execute("2")
    INVOKER.execute("1")
    INVOKER.execute("2")
}