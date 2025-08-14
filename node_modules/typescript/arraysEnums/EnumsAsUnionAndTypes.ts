enum ShapeKind {
    Circle = "circle",
    Square = "square",
};

type Circle = {
    kind: ShapeKind.Circle
    radius: number;
};

type Square = {
    kind: ShapeKind.Square;
    sideLength: number;
};


let circle: Circle = {
    kind: ShapeKind.Circle,
    radius: 10
};