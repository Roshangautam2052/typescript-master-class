type GreetFunction = (name:string) => string
type AreaFunction = (width:number, height?:number) => number
type StatusFunction = (isActive?: boolean) => string


const greet:GreetFunction = (name:string = "Guest") => {
    return `Hello. ${name}!`;
}

const calculateArea: AreaFunction = (width:number, height:number = 10) => {
    return width * height;
}

const checkStatus:StatusFunction = (isActive:boolean = true) => {
    if(isActive) {
        return "Active";
    }
    return "Inactive";
}


// Testing using console.log

console.log(greet);
console.log(calculateArea(12));
console.log(checkStatus(false));