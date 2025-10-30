class User1234 {
    name:string;
    readonly email :string;
    lastname?:string;

    constructor(name:string, email:string, lastName?:string){
        this.name = name;
        this.email = email;
        this.lastname = lastName
    }
}

class Admin extends User1234 {
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

const user1234:User1234 = new User1234("John", "email", "Doe");
const admin:Admin = new Admin("Mark", "mark@gmail.com", 12);
