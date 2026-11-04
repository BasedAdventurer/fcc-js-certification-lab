// Build a String Inverter

// In this lab, you will build a simple string inverter
// that reverses the characters of a given string.

// For example, "hello" should become "olleh".

// Objective: Fulfill the user stories below and get all the tests 
// to pass to complete the lab.

// User Stories:
// 1. You should create a function named reverseString that takes a string as an argument.
// 2. The function should return the reversed string.

// 1. Built-in Method
const reverseString = str => str.split("").reverse().join("");

// 2. Konvensional, dengan for loop biasa
const reverseString2 = str => {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
};

// 3. Dengan "for...of" paling concise
const reverseString3 = str => {
    let reversed = "";
    for (const char of str) {
        reversed = char + reversed;
    }

    return reversed;
}

// Test Output
console.log(reverseString("Greetings from Earth"));  // htraE morf sgniteerG
console.log(reverseString2("Greetings from Earth")); // htraE morf sgniteerG
console.log(reverseString3("Greetings from Earth")); // htraE morf sgniteerG
