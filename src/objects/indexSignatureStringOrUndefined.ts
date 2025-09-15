interface AnimalName  {
    [key:string]: string |undefined;
};

const animalNames:AnimalName ={};

const value = animalNames["nonExistingKey"];

console.log(value);// undefined 