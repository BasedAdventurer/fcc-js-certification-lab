// Build a Title Case Converter

// In this lab you will create a function that converts a string to title case. Title case means that 
// the first letter of each word is capitalized and the rest of the word is in lower case.

// "Web Development Is Awesome" is an example of a title cased string.

// Objective: fulfill the user stories below and get all the tests to pass to complete the lab.

// User Stories:
// 1. You should have a titleCase function that takes a string as an argument.
// 2. The titleCase function should return a string with the first letter 
//    of each word capitalized and the rest of the word in lower case.
// 3. titleCase("I like to code") should return "I Like To Code".
// 4. titleCase("javaScript is fun") should return "Javascript Is Fun".

// 1. Dengan for loop
const titleCase = str => {
    const words = str.split(" ");
    const newArr = [];

    for (const word of words) {
        const capitalized = word[0].toUpperCase() + word.slice(1).toLowerCase();
        newArr.push(capitalized);
    }

    return newArr.join(" ");
}

// 2. Dengan method map();
const titleCase2 = str => str.split(" ").map(word => word[0].toUpperCase() + word.slice(1).toLowerCase()).join(" ");

// Test Output
console.log(titleCase("i like To CoDe")); // return "I Like To Code"
console.log(titleCase2("I'm a little tea pot")); // return "I'm A Little Tea Pot"
console.log(titleCase("sHoRt AnD sToUt")); // return "Short And Stout"
console.log(titleCase2("HERE IS MY HANDLE HERE IS MY SPOUT")); // return "Here Is My Handle Here Is My Spout"