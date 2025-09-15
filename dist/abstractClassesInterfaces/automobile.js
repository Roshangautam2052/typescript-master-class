"use strict";
var AutomobileTypes;
(function (AutomobileTypes) {
    AutomobileTypes["car"] = "car";
    AutomobileTypes["bus"] = "bus";
    AutomobileTypes["van"] = "van";
    AutomobileTypes["truck"] = "truck";
    AutomobileTypes["bike"] = "bike";
})(AutomobileTypes || (AutomobileTypes = {}));
var AutomobileBrands;
(function (AutomobileBrands) {
    AutomobileBrands["ferrari"] = "ferrari";
    AutomobileBrands["astonMartin"] = "astronMartin";
})(AutomobileBrands || (AutomobileBrands = {}));
var AutomobileColors;
(function (AutomobileColors) {
    AutomobileColors["green"] = "green";
    AutomobileColors["blue"] = "blue";
})(AutomobileColors || (AutomobileColors = {}));
;
const ferrari = {
    type: AutomobileTypes.car,
    brand: AutomobileBrands.ferrari,
    colors: [AutomobileColors.blue, AutomobileColors.green],
    description: "This is a ferrari",
};
const toyota = {
    type: "car",
    brand: AutomobileBrands.ferrari,
    colors: [66, 67],
    description: "This is a toyota",
};
console.log(ferrari);
console.log(toyota);
class Car {
    constructor(brand, colors, description) {
        this.brand = brand;
        this.colors = colors;
        this.description = description;
        this.type = "car";
    }
}
const ferrari1 = new Car(AutomobileBrands.ferrari, [AutomobileColors.green], "This is ferrari");
console.log(ferrari);
//# sourceMappingURL=automobile.js.map