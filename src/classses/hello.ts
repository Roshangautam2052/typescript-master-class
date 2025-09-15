class RamUser {
    name :string;
    readonly email :string;
    lastName?:string;

    constructor(name:string, email:string){
        this.name = name // get from this class the name field 
        this.email = email
    }

    greet(){
        return `Hello ${this.name}`;
    }
}

const ramUser:RamUser = new RamUser("Mary", "mary@gmail.com");
console.log(ramUser.greet);
