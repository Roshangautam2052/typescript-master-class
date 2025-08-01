/**
 * In the index.ts file, complete the following tasks:

Define a conditional type IsStringType that checks if a type is string. If true, it resolves to boolean, otherwise to number.

Using the IsStringType, declare a variable typeCheck and initialize it:

Set typeCheck to true if using the type string.

Otherwise, it should be 0.

Create a variable anyValue of type any and initialize it with the string "example".

Cast anyValue to string using type assertion and store it in a new variable castValue.
 */

type IsStringType = string extends string ? boolean : number ;


const typeCheck:IsStringType = true ;

let anyValue: any = "example";

let castValue:string = <string>anyValue;



