let a: number[] = [1, 2, 3];

// Other way of declaration 

let b: Array<string> = ["a", "b", "c"];

let c:(string | number | boolean)[] = ["a", 1, true];

type Seats = {
    [keyof: string]:string;
};

type Airplane = {
    model: string;
    flightNumber:string;
    timeOfDeparture:Date;
    timeOfArrival:Date;
    seats: Seats;
    
}

type Airplanes = Airplane[]

let airplane: Airplane = {
    model : "Airbus A380",
    flightNumber: "A2201",
    timeOfDeparture: new Date(),
    timeOfArrival:new Date(),
    seats: {
        A1: "John Doe",
        A2: "Mark Robert"
    }

}

let airplanes: Airplanes = [{
    model : "Airbus A380",
    flightNumber: "A2201",
    timeOfDeparture: new Date(),
    timeOfArrival:new Date(),
    seats: {
        A1: "John Doe",
        A2: "Mark Robert"
    }

}]