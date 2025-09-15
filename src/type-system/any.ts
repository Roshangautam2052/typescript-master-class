let firstNam:String = "Mark" ;

// any type can accept all types of number
function returnParam(param:any) {
    return param;
}

function multiplyByTwo(number: unknown) {
    
    if(typeof number == "number"){
        return number * 2;
    }
    return "Please provide a valid number";
}

console.log(multiplyByTwo(4));
console.log(multiplyByTwo("string"));