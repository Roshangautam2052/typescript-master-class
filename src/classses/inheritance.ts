class OfficeAdmin {
    name:string;
    readonly email :string;
    lastname?:string;

    constructor(name:string, email:string, lastName?:string){
        this.name = name;
        this.email = email;
        this.lastname = lastName
    }
}

class BirmighamAdmin extends OfficeAdmin {
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

const officeAdmin:OfficeAdmin = new OfficeAdmin("John", "email", "Doe");
const birminghamAdmin:BirmighamAdmin = new BirmighamAdmin("Mark", "mark@gmail.com", 12);
