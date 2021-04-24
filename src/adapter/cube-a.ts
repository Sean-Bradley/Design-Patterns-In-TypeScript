// A hypothetical Cube tool from Company A
export interface ICubeA {
    manufacture(width: number, height: number, depth: number): boolean
}

export default class CubeA implements ICubeA {
    static last_time = Date.now()

    manufacture(width: number, height: number, depth: number): boolean {
        // if not busy, then manufacture a cube with dimensions
        const now = Date.now()
        if (now > CubeA.last_time + 1500) {
            console.log(
                `Company A built Cube with dimensions ${width}x${height}x${depth}`
            )
            CubeA.last_time = now
            return true
        }
        return false // busy
    }
}
