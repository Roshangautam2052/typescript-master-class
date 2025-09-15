type NetworkLoadingState = {
    state: "loading";
};


type NetworkFailedState = {
    state: "failed";
    code: number;
};



type NetworkSuccessSate =  {
    state: "success";
    response: {
        title: string;
        duration: number;
        summary: string
        
    };

};

// Since we have state as a common property among all of these states we can perform certain action based on the states
type NetworkState = 
| NetworkFailedState 
| NetworkLoadingState 
| NetworkSuccessSate

/**
 * 
 * @param state 
 * Here based on the state we can access the value inside each of the types 
 * for FailedState we can access the code 
 * for SuccessState we can access the response 
 * This act of accessing the values inside a type is called Discriminating Unions
 * @returns 
 */
function logger(state: NetworkState){
    switch(state.state){
        case "loading": return "Loading";
        case "failed" : return `Error ${state.code}`;
        case "success" : return `Downloading ${state.response}`;
    }
}

