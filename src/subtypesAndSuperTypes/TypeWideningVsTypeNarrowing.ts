const welcomeString = "Hello There"; // Literal value means that it cannot be reassigned
let replyString = "Hey"; // the type widening we have replyString as a string instead of a literal value 



let unionString:string | undefined; 

// no nullability check has been done TypeNarrowing
//unionString.length;


if(unionString) {
    unionString.length
}