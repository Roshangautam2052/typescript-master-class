async function fetchFromDatabase(id:number):Promise<any>{}

const anotherAsyncFunction = async(): Promise<any>=> {};

async function returnString(id: number):Promise<string> {
    return Promise.resolve("string");
}

type DataBaseUser = {
    name: string,
    age: number;
};

async function returnUser(id:number):Promise<DataBaseUser> {
    return Promise.resolve({name: "John", age:20})
}