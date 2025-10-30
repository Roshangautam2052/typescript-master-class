"use strict";
async function fetchData1(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
    // async function always return Promise
}
async function fetchDefault() {
    const data = await fetchData1("https://jsonplaceholder.typicode.com/posts/1");
    console.log(data);
}
fetchDefault();
