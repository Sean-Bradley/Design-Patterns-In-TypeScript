import IProteus from './iproteus'
import Leopard from './leopard'
import Lion from './lion'

export default class Serpent implements IProteus {
    // Proteus in the form of a Serpent

    name = 'Serpent'

    tell_me_the_future(): void {
        // Proteus will change to something random
        if (Math.floor(Math.random() * 2)) {
            Object.assign(this, new Leopard())
            this.tell_me_the_future = Leopard.prototype.tell_me_the_future
            this.tell_me_your_form = Leopard.prototype.tell_me_your_form
        } else {
            Object.assign(this, new Lion())
            this.tell_me_the_future = Lion.prototype.tell_me_the_future
            this.tell_me_your_form = Lion.prototype.tell_me_your_form
        }
    }

    tell_me_your_form(): void {
        console.log(`I am the form of ${this.name}`)
    }
}
