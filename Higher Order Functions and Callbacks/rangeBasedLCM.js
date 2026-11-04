// Implement a Range-Based LCM Calculator

// In this lab, you will create a function that takes an array of two numbers and returns the least common multiple (LCM) of those two numbers and all the numbers between them.

// Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

// User Stories:
// 1. You should have a smallestCommons functions that accepts an array of two numbers as an arguments/
// 2. The smallestCommons function should return the smallest common multiple that is evenly divisible by both numbers and all sequential numbers in the range between them.
// 3. The function should handle input where the two numbers are not in numerical order.

const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
const lcm = (a, b) => (a * b) / gcd(a, b);

const smallestCommons = ([a, b]) => {
    const max = Math.max(a, b);
    const min = Math.min(a, b);
    const arr = [];

    for (let i = min; i <= max; i++) {
        arr.push(i);
    }

    return arr.reduce((acc, curr) => {
        return lcm(acc, curr);
    });
};

console.log(smallestCommons([23, 18]))
