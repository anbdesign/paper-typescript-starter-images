import {Path} from 'paper'

export function divideShapeEqually(shape:any, number:number) {
    let divideLength = shape.length / number;
    for (let index = 0; index < number; index++) {
        let point = divideLength * index
        shape.divideAt(point)
    }
    return shape
}
