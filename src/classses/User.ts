type Constructor = new(...args:any[]) =>{};// defining a construtor which can take any parameters and arguments are the representation of an array


function TimeStamp<T extends Constructor >(Base: T) {
    return class extends Base {
        protected timeStamp: Date = new Date();

        getTimeStamp(){
            return this.timeStamp;
        }
    };
}



class TerminalUser1 {
    constructor(public name :string) {}
}

class UserWithTimeStamp extends TimeStamp(TerminalUser1){
    constructor(name:string, public age: number){
        super(name);
    }


    displayInfo(){
        console.log(`Name: ${this.name}, Age" ${this.age}` );
        console.log(`Timestamp: ${this.getTimeStamp()}`);
    }


}
const user1: UserWithTimeStamp = new UserWithTimeStamp("Alice", 30);
console.log(user1);


