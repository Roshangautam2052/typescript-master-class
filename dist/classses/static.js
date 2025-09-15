"use strict";
function loadInitialCount() {
    return 10;
}
class Counter {
    static increment() {
        this.count++;
    }
}
Counter.count = 0;
(() => {
    console.log("Initialising counter class");
    // can depend upon external dependencies of the application
    Counter.count = loadInitialCount();
})();
Counter.increment();
console.log(Counter.count);
const counter = new Counter();
//# sourceMappingURL=static.js.map