type GetFirstElement = <T>(array:T[]) => T
// We use this function signature when we want to use the same function to deal with different data types

// This function can deal with both string and number data types 
const getFirstElement: GetFirstElement = (arr) => {
    return arr[0];
}

const numbersArray = [1,2,3,4,5];
const stringArray12312 = ["a", "b", "c", "d"];

let numberOutput = getFirstElement(numbersArray);
let stringOutput = getFirstElement(stringArray);

// we use this Generics Signature when we want to create separate function for separete data types 
type FirstElement<T> = (array:T[]) => T

const getFirstString:FirstElement<string> = (array) => {
    return array[0];
}

const getFirstNumber: FirstElement<number> = (array) =>{
    return array[0];
}