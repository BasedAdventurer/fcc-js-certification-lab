// Implement the Slice and Splice Algorithm

// In this lab, you will need to create an algorithm to merge two arrays.

// Objective: Fulfill the user stories below and get all the tests
// to pass to complete the lab.

// User Stories:
// 1. Create a frankenSplice function that accepts two arrays and an index.
// 2. Copy each element of the first array into the second array, in order, 
//    beginning at the given index, and return the resulting array.
// 3. The input arrays should remain the same after the function runs.

// 1. Dengan splice() Method
const frankenSplice = (firstArr, secondArr, index) => {
    const copySecondArr = [...secondArr];
    copySecondArr.splice(index, 0, ...firstArr);
    return copySecondArr;
}

// 2. Dengan slice() Method
const frankenSplice2 = (firstArr, secondArr, index) => [...secondArr.slice(0, index), ...firstArr, ...secondArr.slice(index)];

// Test Output
console.log(frankenSplice([1, 2, 3], [4, 5], 1)); // return [4, 1, 2, 3, 5]
console.log(frankenSplice2(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2)); // return ["head", "shoulders", "claw", "tentacle", "knees", "toes"]

