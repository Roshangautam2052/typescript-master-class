
// using Generics with named function
function returnParams(param: any) {
    return param;
}
// Is there a way to make the function generic and to annotate input as well as output using Generics 

function returnParams1<Type>(param: Type): Type{
    return param
}

// Now this function can be invoked using any type for example 

const return1 = returnParams1<string>("123");
const return2 = returnParams1<number>(123);

// Using Generics with function call signature or arrow function


const myParam: <T>(param: T) => T = (param) => param;

// function expression 
const myParam2 = function <U>(param: U):U {
    return param;
}

type Object1 = {
    myParam:<T, X>(param:T, param2:X) => T | X
};

type MyParam = <K>(param: K) => K;