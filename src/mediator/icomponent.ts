// An interface that each component should implement

export default interface IComponent {

    notify(message: string): void

    receive(message: string): void
}