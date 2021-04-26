import Light from './light'

export default class SwitchOnCommand {
    light: Light

    constructor(light: Light) {
        this.light = light
    }

    execute(): void {
        this.light.turnOn()
    }
}
