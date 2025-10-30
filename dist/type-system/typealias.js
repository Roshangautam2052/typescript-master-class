"use strict";
// automatically converted to types by typescript(DuckTyping)
// This is annotation (when we assign a type )
let firstName1 = "Mark";
let age1 = 32;
let today = new Date();
let unique = Symbol();
// Inference : When typeScript automatically defines the type of variable is called inference
function addNumbers(a, b) {
    return a + b;
}
// When the typescript is able to infer the type of variable for us based upon the expression is called inference
let finalResult = addNumbers(10, 15);
// The question is when should we let typeScript infer the type for us and when should we declare it 
// If the type is very simple go annotate it else if the type is very complicated then go declare the type
// In least possible cases let the typescript infer the type for you 
