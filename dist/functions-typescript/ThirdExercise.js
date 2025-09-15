"use strict";
/**
 * Fetch Data Function:

Define a function call signature FetchDataFunction for an asynchronous function. T
This function should take a string URL and rest parameters representing additional query strings.
It returns a Promise containing an array of strings.

Implement the fetchData function using this signature.
Construct the URL using the base URL and concatenate it with the query strings formed from the rest parameters.
Use the fetch API to retrieve data from this URL.

Test this function by fetching data from "https://api.example.com" with the query parameters "param1=value1" and "param2=value2". Expect the function to return an array ["data1", "data2"] representing simulated API data.

*/
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const fetchData = (url, ...queries) => __awaiter(void 0, void 0, void 0, function* () {
    const queryString = queries.join("&");
    const response = yield fetch(`${url}?${queryString}`);
    const data = yield response.json();
    return data;
});
//# sourceMappingURL=ThirdExercise.js.map