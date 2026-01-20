/***
 * 
 */

type Cirlce = {
    kind: "circle";
    radius: number;
};


type Square1 = {
    kind: "square";
    side: number;
};


type Rectangle = {
    kind: "rectangle";
    length: number;
    breadth: number;
};

type Shape = Circle | Square1;



function getArea(shape:Shape):number{
    switch(shape.kind){
        case "circle":
            return Math.PI * shape.radius ** 2;

        case "square":
            return shape.side ** 2;
        
        default:
            const _exhaustiveCheck: never = shape;
            throw new Error("Unhandled shape type");
    }
}