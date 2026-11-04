// Build a Symmetric Difference Function

// Compare two arrays and return a new array with any items found in only one of the two given arrays, but not both. In other words, return the symmetric difference of two arrays.

// Example:
// • Array A: ["diamond", "stick", "apple"]
// • Array B: ["stick", "emerald", "bread"]
// • Result: ["diamond", "apple", "emerald", "bread"]
// Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

// User Stories:

// 1. Your function diffArray should return an array.
// 2. Your function should take two arguments, both of which are arrays.
// 3. Your function should make use of the filter method.
// 4. Your function should return the symmetric difference of the two arrays.
// 5. Your function should return an empty array if there is no symmetric difference.
// 6. Your function should list the items found only in the first array before the items found only in the second array, preserving their original order within each array.

const diffArray = (arr1, arr2) => {
    const onlyInArr1 = arr1.filter(e => !arr2.includes(e));
    const onlyInArr2 = arr2.filter(e => !arr1.includes(e));

    return [...onlyInArr1, ...onlyInArr2];
}

// Shortest Solution (using XOR)
const diffArray2 = (a, b) => [...a, ...b].filter(x => a.includes(x) ^ b.includes(x));
// "^" can be replaced by "!==" same outcome, only differ is ^ return 0/1 while !== return true/false

console.log(diffArray(["diamond", "stick", "apple"], ["stick", "emerald", "bread"]));
