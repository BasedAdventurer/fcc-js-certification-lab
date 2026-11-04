// Implement an Element Skipper

// In this lab you will create a function that skips elements in an array until
// it finds an acceptable one based on a specific test function.

// For example, for an array like [1, 1, 1, 2, 1, 1, 1] and a test function
// function(n) {return n === 2}, the first element that is acceptable for this
// is the one at index 3, so all the elements before that need to be discarded,
// and the output should be the remaining elements [2, 1, 1, 1].

// Objective: Fulfill the user stories below and get all the tests to pass to
// complete the lab.

// User Stories:
// 1. You should have a dropElements function that accepts an array (arr) and a 
//    function (func) as arguments.
// 2. The dropElements function should iterate through the array and remove elements 
//    starting from the first one until func returns true for an element.
// 3. The dropElements function should return the remaining elements in the array 
//    if the condition is met.
// 4. If the condition is never satisfied, it should return an empty array.

// 1. Cara dengan For loop & slice
const dropElements = (arr, func) => {
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i])) {
            return arr.slice(i);
        }
    }
    return [];
}

// 2. Alternatif Versi Modern
const dropElements2 = (arr, func) => {
    const index = arr.findIndex(func);
    return index === -1 ? [] : arr.slice(index);
};

// Test Output
console.log("Using For Loop & slice");
console.log(dropElements([1, 2, 3, 4], function(n) {return n >= 3;}));
console.log(dropElements([0, 1, 0, 1], function(n) {return n === 1;}));
console.log(dropElements([1, 2, 3], function(n) {return n > 0;}));
console.log(dropElements([1, 2, 3, 4], function(n) {return n > 5;}));
console.log(dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;}));
console.log(dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}));
console.log("-------------")
console.log("Using findIndex() method");
console.log(dropElements2([1, 2, 3, 4], function(n) {return n >= 3;}));
console.log(dropElements2([0, 1, 0, 1], function(n) {return n === 1;}));
console.log(dropElements2([1, 2, 3], function(n) {return n > 0;}));
console.log(dropElements2([1, 2, 3, 4], function(n) {return n > 5;}));
console.log(dropElements2([1, 2, 3, 7, 4], function(n) {return n > 3;}));
console.log(dropElements2([1, 2, 3, 9, 2], function(n) {return n > 2;}));
