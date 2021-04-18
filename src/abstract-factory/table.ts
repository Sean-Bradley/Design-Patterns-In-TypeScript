export interface Table {

    name: string
    height: number
    width: number
    depth: number
    
    getDimensions(): dimension;

}