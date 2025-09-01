function loadInitialCount():number{
    return 10
}

class Counter {
    static count = 0;


    static increment() {
        this.count++;
    }

    static {
        console.log("Initialising counter class");
        // can depend upon external dependencies of the application
        Counter.count = loadInitialCount();
    }
}

Counter.increment();
console.log(Counter.count);

const counter:Counter = new Counter();
