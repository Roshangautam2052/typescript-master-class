// Creating a map function in typeScript 

const mapFunction = <K> (array: K[], predicate:(value: K) => K):K[] => {
        let result:K[] = [];
        for(let i = 0; i<array.length; i++){
            let changedValue = predicate(array[i]);
            result.push(changedValue);
        }
        return result;

}

function incrementByOne(value:number) {
    return value + 1;
}

const sampleArray:number[] = [1, 2, 3, 4];

console.log(mapFunction(sampleArray, incrementByOne));