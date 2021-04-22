// An interface that each component should implement

export interface IComponent {

    notify(message: string): void

    receive(message: string): void
}