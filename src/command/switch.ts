// The Switch (Invoker) Class.

import ICommand from './icommand'

export default class Switch {
    #commands: { [id: string]: ICommand }
    #history: [number, string][]

    constructor() {
        this.#commands = {}
        this.#history = []
    }

    showHistory(): void {
        // Print the history of each time a command was invoked"
        this.#history.forEach((row) => {
            console.log(`${row[0]} : ${row[1]}`)
        })
    }

    register(commandName: string, command: ICommand): void {
        // Register commands in the Invoker
        this.#commands[commandName] = command
    }

    execute(commandName: string): void {
        // Execute any registered commands
        if (commandName in this.#commands) {
            this.#commands[commandName].execute()
            this.#history.push([Date.now(), commandName])
        } else {
            console.log(`Command [${commandName}] not recognised`)
        }
    }

    replayLast(numberOfCommands: number): void {
        // Replay the last N commands
        const commands = this.#history.slice(
            this.#history.length - numberOfCommands,
            this.#history.length
        )
        commands.forEach((command) => {
            this.#commands[command[1]].execute()
            // or if you wanted to also record this replay in history
            // this.execute(command[1])
        })
    }
}
