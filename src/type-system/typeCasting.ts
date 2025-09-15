
let firstName = <any>"Mark";

let lastName = "Doe" as any ;

// User from API
let user = {
    name : "Mark",
    email: "mark@gmail.com"
};

function fetchedUser() {
    return user;
}

type User1212 = {
    name: String;
    email:String;
}

function fetchUser() {
    return user as User1212
}
