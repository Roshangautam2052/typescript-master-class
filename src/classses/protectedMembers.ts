class User3 {
    public name:string;
    readonly email:string;
    lastname?: string;
    protected phone:number;

    constructor(name:string, email:string, phone:number, lastName?:string){
        this.name = name,
        this.email = email,
        this.phone = phone,
        this.lastname = lastName
    }
}

class Admin3 extends User3{
    hasRole:boolean;
    id:number;
    constructor(name:string, email:string, phone:number, id:number, hasRole:boolean, lastName?:string){
            super(name, email, phone, lastName);
            this.hasRole = hasRole;
            this.id = id
    }

    public displayOutput() {
        console.log(this.phone);
    }
    
}

const firstUserFromUk = new User3("Harry", "harry@gmail.com", 123456, "Potter")
