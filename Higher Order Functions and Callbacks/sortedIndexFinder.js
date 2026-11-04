// Implement a Sorted Index Finder

// In this lab you will create a function that returns the lowest index at which a value should be inserted into an array once it has been sorted in ascending order.

// Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.
// User Stories:
// 1. You should have a getIndexToIns function that takes two arguments: an array and a number.
// 2. You should use the sort method to sort the array in ascending order.
// 3. Your getIndexToIns function should return the lowest index at which the number should be inserted by using the findIndex method.
// 4. Your getIndexToIns function should always return a number.

// Hint:
// The findIndex method is a built-in array method in JavaScript. It takes a callback function and returns the index of the first element that satisfies the condition. Both findIndex and sort are higher-order functions.

// Examples:
// • getIndexToIns([1, 2, 3, 4], 1.5) should return 1 because 1.5 is greater than 1 (index 0) and less than 2 (index 1).
// • getIndexToIns([20, 3, 5], 19) should return 2 because after sorting to [3, 5, 20], 19 is less than 20 (index 2) and greater than 5 (index 1).

const getIndexToIns = (arr, num) => {
    const index = arr.sort((a, b) => a - b).findIndex(n => n >= num);
    return index === -1 ? arr.length : index;
};

console.log(getIndexToIns([20, 3, 5], 19));
console.log(getIndexToIns([1, 2, 3, 4], 1.5));
console.log(getIndexToIns([10, 20, 30, 40, 50], 35));
console.log(getIndexToIns([10, 20, 30, 40, 50], 30));
console.log(getIndexToIns([40, 60], 50));
console.log(getIndexToIns([3, 10, 5], 3));
console.log(getIndexToIns([3, 10, 5], 11));
console.log(getIndexToIns([], 5));
