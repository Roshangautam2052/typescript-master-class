//Declare a function named greet that takes a string parameter name and returns a greeting message

type Greet1 = (name: string) => string ;

const firstGreeting:Greet1 = (message:string):string => {
    return `Hi ${message}`;
}

// Define a type Product with proporites id(number) and name (string).Create a function named 
//getProduct that takes an id parameter and returns a Product


type Product = {
    id: number,
    name:string,
}

const products:Product[] = [
    {
        id: 123,
        name: "Heaphone"
    },
    {
        id: 123456,
        name: "Iphone"
    },
    {
        id: 1234,
        name: "Car"
    }

]


const getProduct = function(id:number):Product | undefined {
   return products.find(product => product.id === id);
}

console.log(getProduct(1234));
