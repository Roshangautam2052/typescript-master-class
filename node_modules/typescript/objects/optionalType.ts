type UKPOST = {
    county: string;
    city: string;
    firstLineOfAddress?:string;
    houseNumber:number;
    postCode:string;
    readonly country: "England"|"Scotland"|"Wales" | "Northern Ireland";

};

let homeAddress1:UKPOST = {
    county: "West Midlands",
    city: "West Bromwich",
    houseNumber: 25,
    postCode : "DY28AN",
    country: "England"
};
// Once we have assigned the type of country this cannot be changed 
console.log(homeAddress1.country);