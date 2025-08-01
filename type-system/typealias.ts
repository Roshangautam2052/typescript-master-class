// define types
// This is declaration(when we are declaring a type)
type CustomString = string;
type CustomNumber = number;
type CustomDate = Date;
type CustomSymbol = Symbol;

// automatically converted to types by typescript(DuckTyping)

// This is annotation (when we assign a type )
let firstName1: CustomString = "Mark";
let age1:CustomNumber = 32;
let today: CustomDate = new Date();
let unique:CustomSymbol = Symbol();

// Inference : When typeScript automatically defines the type of variable is called inference

function addNumbers(a: number, b: number){
    return a + b;
}
// When the typescript is able to infer the type of variable for us based upon the expression is called inference
let finalResult = addNumbers(10, 15);

// The question is when should we let typeScript infer the type for us and when should we declare it 
// If the type is very simple go annotate it else if the type is very complicated then go declare the type
// In least possible cases let the typescript infer the type for you 

