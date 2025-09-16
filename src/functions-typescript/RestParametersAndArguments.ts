function multiplyBy(by:number, ...numbers: number[]){
    return numbers.map((number) => by * number);
}

console.log(multiplyBy(2,3,4,5,6,7,7,8));


const args = [8, 5] as const;

const angle = Math.atan2(...args);

// Parameter Desctructuring

type Numbers = {
    a: number;
    b: number;
    c: number;
};

let numbersObject: Numbers = {
    a : 2,
    b : 3,
    c : 4,
};

// Due to the usage of parameter desctructuring we can pass the parameters as numbers
function sum({a, b, c}: Numbers){
    return a + b + c;
}

console.log(sum(numbersObject));
console.log(sum(numbersObject));