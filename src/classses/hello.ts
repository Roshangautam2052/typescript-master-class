class User565 {
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

const user565:User565 = new User565("Mary", "mary@gmail.com");
console.log(user565.greet);
//user565.email("hello@email.coom");

