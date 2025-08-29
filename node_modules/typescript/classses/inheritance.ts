class User1 {
    name:string;
    readonly email :string;
    lastname?:string;

    constructor(name:string, email:string, lastName?:string){
        this.name = name;
        this.email = email;
        this.lastname = lastName
    }
}

class Admin extends User1 {
    isAdmin:boolean = true;
    userReporting: number;

    constructor(
        name:string, 
        email:string, 
        userReporting:number,  
        lastName?:string
    ) {
        super(name, email, lastName);
        this.userReporting = userReporting;
    }
}

const user1:User1 = new User1("John", "email", "Doe");
const admin:Admin = new Admin("Mark", "mark@gmail.com", 12);
