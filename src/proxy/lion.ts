import Proteus from './proteus'
import Leopard from './leopard'
import Serpent from './serpent'


export default class Lion implements Proteus {
    // Proteus in the form of a Lion

    name = "Lion"

    tell_me_the_future() {
        // Proteus will change to something random
        //console.log(Math.floor(Math.random() * 2))
        if (Math.floor(Math.random() * 2)) {
            Object.assign(this, new Serpent())
            //this.constructor = Serpent
            this.tell_me_the_future=Serpent.prototype.tell_me_the_future
            this.tell_me_your_form=Serpent.prototype.tell_me_your_form
        } else {
            Object.assign(this, new Leopard())
            //this.constructor = Leopard
            this.tell_me_the_future=Leopard.prototype.tell_me_the_future
            this.tell_me_your_form=Leopard.prototype.tell_me_your_form
        }
    }

    tell_me_your_form() {
        console.log(`I am the form of ${this.name}`)
    }
}