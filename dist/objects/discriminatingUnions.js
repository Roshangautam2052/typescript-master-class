"use strict";
/**
 *
 * @param state
 * Here based on the state we can access the value inside each of the types
 * for FailedState we can access the code
 * for SuccessState we can access the response
 * This act of accessing the values inside a type is called Discriminating Unions
 * @returns
 */
function logger(state) {
    switch (state.state) {
        case "loading": return "Loading";
        case "failed": return `Error ${state.code}`;
        case "success": return `Downloading ${state.response}`;
    }
}
//# sourceMappingURL=discriminatingUnions.js.map