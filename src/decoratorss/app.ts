function methodLogger(originalMethod:any, context:any){
    function replacementMethod(this:any, ...args:any){
        console.log(args);
        console.log(this);
        console.log("Invocation Started");
        const result = originalMethod.call(this, ...args);
        console.log("Invocation Ended")
    }
    return replacementMethod;
}


class NepalesePerson {
    constructor(public name: string){}

    @methodLogger
    greet(greetingText:string) {
        console.log(`${greetingText}: ${this.name}`)
    }
}

let firstPerson: NepalesePerson = new NepalesePerson("Gopal")

firstPerson.greet("Namaste");