import Proteus from './proteus'
import Leopard from './leopard'
import Lion from './lion'


export default class Serpent implements Proteus {
    // Proteus in the form of a Serpent

    name = "Serpent"

    tell_me_the_future() {
        if (Math.floor(Math.random() * 2)) {            
            Object.assign(this, new Leopard())
            //this.constructor = Leopard
            this.tell_me_the_future=Leopard.prototype.tell_me_the_future
            this.tell_me_your_form=Leopard.prototype.tell_me_your_form
        } else {
            Object.assign(this, new Lion())
            //this.constructor = Lion
            this.tell_me_the_future=Lion.prototype.tell_me_the_future
            this.tell_me_your_form=Lion.prototype.tell_me_your_form
        }
    }

    tell_me_your_form() {
        console.log(`I am the form of ${this.name}`)
    }
}