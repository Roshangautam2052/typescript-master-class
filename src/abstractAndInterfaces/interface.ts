interface User11 {
    userName:string;
    email:string;
    login():void;
}

class Admin11 implements User11 {

    constructor(
        public userName:string, 
        public email:string,
        public adminLevel:number
    ){}

    login():void{
        console.log("Admin is now logged in");
    }

}

class Customer implements User11 {
    constructor(public userName:string, public email:string){}

    login():void {
        console.log("Customer is now logged in");
    }
}

class Auth {
    public static login(user:User11){
        user.login();
    }
}

const admin12: Admin11 = new Admin11("mark", "mark@email.com", 1)
const customer12 = new Customer("john", "john@gmail.com")


Auth.login(admin12);
Auth.login(customer12);