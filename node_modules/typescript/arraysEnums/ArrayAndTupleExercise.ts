/** Problem Statement:
 * In the index.ts file, you will work with strictly typed arrays and tuples using TypeScript:

Define and create a readOnlyNumbers as a ReadonlyArray<number> initialized with [1, 2, 3, 4, 5]. This array should not be modifiable after creation.

Define a type alias NumberStringTuple for a tuple that consists of a number and a string.

Using the NumberStringTuple, create a variable ageNameTuple initialized with [30, "John"], representing a person's age and name.

Create a read-only tuple readOnlyTuple of type Readonly<NumberStringTuple> initialized with [25, "Jane"]. This tuple should not be modifiable after its creation.
 * 
 */

type ReadonlyNumbers = ReadonlyArray<number>;


let readOnlyNumbers: ReadonlyNumbers = [1,2,3, 4, 5];


type NumberStringTuple = [number, string];

let ageNameTuple:NumberStringTuple = [30, "John"];

let readOnlyTuple: Readonly<NumberStringTuple> = [25, "Jane"];


