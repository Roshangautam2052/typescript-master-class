/**
 * Totality in typescript referes to function or operations
 * that handles all possbile inputs of a given type without failing at 
 * runtime
 */

function getLength(value:string | number):number{
    if(typeof value == "string"){
        return value.length
    } else {
        return value.toString().length
    }
}