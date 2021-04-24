import IProteus from './iproteus'
import Leopard from './leopard'
import Serpent from './serpent'

export default class Lion implements IProteus {
    // Proteus in the form of a Lion

    name = 'Lion'

    tell_me_the_future(): void {
        // Proteus will change to something random
        if (Math.floor(Math.random() * 2)) {
            Object.assign(this, new Serpent())
            this.tell_me_the_future = Serpent.prototype.tell_me_the_future
            this.tell_me_your_form = Serpent.prototype.tell_me_your_form
        } else {
            Object.assign(this, new Leopard())
            this.tell_me_the_future = Leopard.prototype.tell_me_the_future
            this.tell_me_your_form = Leopard.prototype.tell_me_your_form
        }
    }

    tell_me_your_form(): void {
        console.log(`I am the form of ${this.name}`)
    }
}
