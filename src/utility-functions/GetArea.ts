interface Circle {
    kind: 'circle'
    radius: number
}

interface Square {
    kind: 'square'
    sideLength: number
}

interface Rectangle {
    kind: 'rectangle'
    width: number
    hight: number
}

type Shape = Circle | Square | Rectangle;
// we can now use the in operator as a type guard to narrow down the type of shape
function getArea(shape: Shape) {
    if ('radius' in shape) {
        // shape is treated as Circle here
        return Math.PI * shape.radius ** 2;
    } else if ('sideLength' in shape) {
        // shape is treated as Square here
        return shape.sideLength ** 2;
    } else return shape.width * shape.hight;

}