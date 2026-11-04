// Create a Deep Flattening Tool
// In this lab, you will be implementing an array flattening algorithm.
// Flattening an array means turning a nested array of any depth into a single, one-dimensional array. The process extracts all elements in order, unwrapping only arrays. Other types are left unchanged.
// For example:
// Original 	                Flattened
// [[1], [], [2, [3]]] 	        [1, 2, 3]
// [1, {"foo": "bar"}, [2]] 	[1, {"foo": "bar"}, 2]
// ["baz", [1, 2], {}] 	        ["baz", 1, 2, {}]

// Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.
// User Stories:
// 1. You should have a function named steamrollArray.
// 2. The steamrollArray function should accept one argument: a nested array.
// 3. The function should flatten the nested array, accounting for varying levels of nesting.
// 4. Your solution should not use the Array.prototype.flat() or Array.prototype.flatMap() methods.
// 5. Global variables should not be used.

// Manually with recursive function ((...) spread operator)
const steamrollArray = arr => {
    const results = [];

    for (const element of arr) {
        if (Array.isArray(element)) {
        const flattenElement = steamrollArray(element);
        results.push(...flattenElement);
        } else {
        results.push(element);
        }
    }

    return results;
}

// console.log(steamrollArray([1, {"foo": "bar"}, [2]]));
// console.log(steamrollArray([1, {}, [3, [[4]]]]));

// Manually with recursive function (with concat)
const steamrollArray2 = arr => {
    let results = [];

    for (const element of arr) {
        if (Array.isArray(element)) {
        results = results.concat(steamrollArray2(element));
        } else {
        results.push(element);
        }
    }

    return results;
}

console.log(steamrollArray2([1, {}, [3, [[4]]]]));

// With .flat() method
const flattenArr = arr => arr.flat(Infinity);

// console.log(flattenArr([1, {}, [3, [[4]]]]));
