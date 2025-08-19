type Reservation = {
    departureDate: Date;
    returnDate: Date;
    departingFrom: string;
    destination:string;
};

// This is overloading a function in typescript
type Reserve = {(
    departureDate: Date,
    returnDate: Date,
    departingFrom: string,
    destination:string,
):Reservation | never;
(
    departureDate: Date,
    departingFrom: string,
    destination:string,
): Reservation | never;
};
