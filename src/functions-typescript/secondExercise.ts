type LogMessage = (message:string) => void;
type ThrowError = (errorMessage:string) => never;


const log:LogMessage = (message) => {
    console.log(message);
};

const throwError:ThrowError = (error) =>{
    throw new Error(error);
}

function processData(data:string): void {
    log(`Processing ${data}`);
}

function errorHandlingScenario(): never {
    throwError("An unexpected error occurred!");
}


console.log(log("Hello TypeScript"));
console.log(throwError("Test error"));
console.log(processData("sample data"));
//console.log(errorHandlingScenario("An unexpected error occured!"));