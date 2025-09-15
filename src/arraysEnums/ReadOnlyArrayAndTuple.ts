type ReadOnlyTuple = readonly[string, string, number];


let person3:ReadOnlyTuple = ["John", "Doe", 12];

//Using another definition

type a = Readonly<string[]>;
type b = ReadonlyArray<string | number>;
type c = Readonly<[number,string,number]>;
