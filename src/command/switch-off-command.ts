import Light from './light'

export default class SwitchOffCommand {
    light: Light

    constructor(light: Light) {
        this.light = light
    }

    execute(): void {
        this.light.turnOff()
    }
}
