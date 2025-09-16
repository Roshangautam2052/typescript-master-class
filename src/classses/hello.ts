class User {
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

const user:User = new User("Mary", "mary@gmail.com");
console.log(user.greet);
user.email("hello@email.coom");

