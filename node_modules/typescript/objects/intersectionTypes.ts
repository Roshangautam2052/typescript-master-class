type Lion = {
    name: string;
    weight:number;
    color:string;
    haveHair: Boolean;
    countryOfOrigin:string
};

type Tiger = {
    name:string;
    weight:number;
    color:string;
    countryOfOrigin:string

};
// This Ligar will pick up all the common properites with the two types along with the unique 
// property of each of the types
type Ligar = Lion & Tiger ;

let dubaiLigar: Ligar = {
    name : "Mikey",
    weight: 120,
    color: "white",
    countryOfOrigin: "Dubai",
    haveHair: false
}