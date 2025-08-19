type KeyValuePair<K,V> = {
    key: K;
    value: V;
};


let stringNumberPair:KeyValuePair<string, number> = {
    key: "age",
    value: 30,
};


let numberArrayPair: KeyValuePair<number, string[]>= {
    key: 1234,
    value :["a"],
}
/**
 * The question is how we can defined stringNumberPair and ArrayNumber Pair
 * Each object have common properites which are key and value 
 * This can be solved by using Generics with KeyValuePair
 */
