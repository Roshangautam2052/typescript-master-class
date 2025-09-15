class Person2 {
    private _age: number;

    constructor(
        public firstName:string,
        public lastName:string
    ){}
    public fullname(){
        return `${this.firstName} ${this.lastName}`
    }
    // set methods have only one parameters 
    public set age(age:number){
        if(age > 200  && age > 0){
            throw new Error("The age must be within the range of 200 to 0")
        }
        this._age = age;
    }
    // get methods don't have any parameters 
    public get age() {
        if(this._age === undefined){
            throw new Error("Age property is not defined");
        }
        return this._age;
    }
}

const john:Person2 = new Person2("John", "Doe");
const mark5:Person2 = new Person2("Mark", "Doe");
john.age = 45;// we are using set function to set the age

console.log(john.age)