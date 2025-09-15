let number3 :readonly number[] = [1,2,3];

number3.push(2);



type ReadOnlyTuple = readonly[string, string, number];


let person3:ReadOnlyTuple = ["John", "Doe", 12];

person3[0] ="Munni";


//Using another definition

type a = Readonly<string[]>;
type b = ReadonlyArray<string | number>;
type c = Readonly<[number,string,number]>;
