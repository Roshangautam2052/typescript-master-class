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

type FetchDataFunction = (url:string, ...queries: string[]) => Promise<(string[])> ;

const fetchData: FetchDataFunction = async (url, ...queries) => {
    const queryString = queries.join("&");
    const response = await fetch(`${url}?${queryString}`);
    const data = await response.json();

    return data;
}
