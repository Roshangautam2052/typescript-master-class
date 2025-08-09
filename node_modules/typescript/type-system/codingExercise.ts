/**
 * Coding Exercise: Union Types and Type Alias
In the provided index.ts file, complete the following tasks:

Declare a variable flexible of type any and initialize it with the number 100.

Declare a variable mystery of type unknown and initialize it with the string "discover".

Create a type alias StringOrNumber that represents a union type of string and number.

Declare a variable mixed using the type alias StringOrNumber and initialize it with the string "TypeScript".
 */

let flexible: any = 100;

let mystery: unknown = "discover";

type StringOrNumber = string | number ;

let mixed:StringOrNumber = "TypeScript";