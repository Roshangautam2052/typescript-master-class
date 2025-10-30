function writeToDataBase(value:string): void{
    console.log("Writing to a database", value);
}

function throwError1(error:string): never {
    throw new Error(error);
}


type check87 = never extends void? true : false;

type check88 = void extends never ? true : false;

