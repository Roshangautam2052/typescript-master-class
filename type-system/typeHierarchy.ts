// typeHierarchy in typeScript
type check = any extends unknown ? true : false ;
type check2 = string extends any ? true : false ;
type check3 = null extends any ? true: false ;
type check4 = undefined extends void ? true: false ;

type check5 = [] extends Object ? true: false ;
type check6 = Function extends Object ? true: false ;

// This is a throw error and typescript infers it as never type as it never completes
const throwError = (errorMessage: string ) => {
    throw new Error(errorMessage);
}

let string: Object = ["a", "b", "c"]; // typescript will not complaion as Object is parent type of array

let myFunc: Object = () => 12 // We can use object type but we will not use it we use more fitting type
