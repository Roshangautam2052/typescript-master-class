// Here it means that each objects within the award will have type of string

type AwardDetails = {
    name: string;
    date: Date;
    surname: string,
}

type Award = {
    [key: string]: AwardDetails;
}

type Actor = {
    name:  string;
    title: string;
    awards: Award;
};

let leonardo = {
    name: "Leonardo",
    title: "Mr",
    awards: {
        oscar: {
            name: "Oscar1",
            date: new Date(),
            surname: "Hello"
        }
    }
}