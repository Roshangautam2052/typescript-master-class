function writeToDataBase(value:string): void{
    console.log("Writing to a database", value);
}

function throwError1(error:string): never {
    throw new Error(error);
}


type check1212 = never extends void? true : false;

type check3124124 = void extends never ? true : false;

