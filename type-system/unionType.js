// Union Types 
// We need to use type alias to use Union types
var stringOrNumber = "12";
function printCharacter(input) {
    if (typeof input == "string") {
        console.log(input);
    }
    console.log("Please input something to print");
}
printCharacter("Hello");
