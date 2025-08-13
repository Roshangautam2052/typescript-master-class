// Union Types 
// We need to use type alias to use Union types

type StringorNumber = string | number ;
type NumberOrUndefined = string | number | undefined;

let stringOrNumber : StringorNumber = "12";


function printCharacter(input: NumberOrUndefined){
    if(input){
        console.log(input);
    }
    console.log("Please input something to print");
}

printCharacter("Hello");
print()