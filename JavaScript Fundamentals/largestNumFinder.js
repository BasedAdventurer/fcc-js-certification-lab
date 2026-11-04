// Build the Largest Number Finder

// In this lab, you will build a function that returns an array consisting 
// of the largest number from each provided sub-array.

// Remember, you can iterate through an array with a simple for loop, 
// and access each member with array syntax arr[i].

// Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

// User Stories:
// 1. You should create a function largestOfAll that takes an array of arrays as an argument.
// 2. The function should return an array containing the largest number from each sub-array.

// 1. Konvensional dengan Nested Loop
const largestOfAll = arr => {
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        let largest = arr[i][0];
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] > largest) {
                largest = arr[i][j];
            }
        }
        result.push(largest);
    }

    return result;
}

// 2. Deklaratif dengan .map() dan Math.max()
const largestOfAll2 = arr => arr.map(subArr => Math.max(...subArr));

// Test Output
console.log(largestOfAll([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]])); // [ 5, 27, 39, 1001 ]
console.log(largestOfAll2([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]])); // [ 5, 27, 39, 1001 ]