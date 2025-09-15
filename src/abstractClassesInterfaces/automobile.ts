interface Automobile<Type, Brand, Colors> {
    type:Type;
    brand:Brand;
    colors:Colors[];
    description:string;
}

enum AutomobileTypes {
    car = "car",
    bus = "bus",
    van = "van",
    truck = "truck",
    bike = "bike",
}

enum AutomobileBrands {
    ferrari = "ferrari",
    astonMartin = "astronMartin",
}

enum AutomobileColors {
    green = "green",
    blue = "blue",

};

const ferrari: Automobile<AutomobileTypes, AutomobileBrands, AutomobileColors> = {
    type: AutomobileTypes.car,
    brand: AutomobileBrands.ferrari,
    colors:[AutomobileColors.blue, AutomobileColors.green],
    description: "This is a ferrari",
};

const toyota:Automobile<string, AutomobileBrands, number> = {
    type: "car",
    brand: AutomobileBrands.ferrari,
    colors:[66, 67],
    description: "This is a toyota",
}

console.log(ferrari);
console.log(toyota);

class Car implements Automobile<string, AutomobileBrands, AutomobileColors> {
    public type: string = "car"
    constructor(
        public brand:AutomobileBrands,
        public colors:AutomobileColors[],
        public description: string,
    ){}
}

const ferrari1:Car = new Car (
    AutomobileBrands.ferrari,
    [AutomobileColors.green],
    "This is ferrari"
)

console.log(ferrari);