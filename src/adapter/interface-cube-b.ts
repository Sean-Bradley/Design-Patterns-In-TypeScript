// An interface to implement
export default interface ICubeB {
    create(
        top_left_front: [number, number, number],
        bottom_right_back: [number, number, number]
    ): boolean
}