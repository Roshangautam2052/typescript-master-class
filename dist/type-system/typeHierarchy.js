"use strict";
// This is a throw error and typescript infers it as never type as it never completes
const throwError121 = (errorMessage) => {
    throw new Error(errorMessage);
};
let string = ["a", "b", "c"]; // typescript will not complaion as Object is parent type of array
let myFunc = () => 12; // We can use object type but we will not use it we use more fitting type
//# sourceMappingURL=typeHierarchy.js.map