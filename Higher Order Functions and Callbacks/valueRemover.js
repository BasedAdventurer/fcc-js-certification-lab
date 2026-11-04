// Implement a Value Remover Function

// In this lab, you will create a function that takes an initial array as its first argument, followed by one or more additional arguments representing the values to remove.

// Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

// User Stories:
// 1. You should have a destroyer function that accepts an array and one or more additional arguments.
// 2. The destroyer function should return a new array excluding all elements from the first argument that match any of the subsequent arguments.
// 3. The function must accept an indeterminate number of arguments.

const destroyer = (arr, ...val) => {
    return arr.filter((el) => !val.includes(el));
}

// Tests:
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3))
console.log(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3))
console.log(destroyer(["tree", "hamburger", 53], "tree", 53))
console.log(destroyer( ["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan" ))
