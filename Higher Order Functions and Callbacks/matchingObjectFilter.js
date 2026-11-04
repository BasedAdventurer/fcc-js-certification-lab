// Implement a Matching Object Filter

// In this lab, you will create a function that filters an array of objects and returns only those objects that match all key-value pairs in a given source object.
// Objective: Fullfill the user stories below and get all the tests to pass to complete the lab.
// User Stories:
// 1. You should have a whatIsInAName function that accepts two arguments, an array of objects and a source object.
// 2. The whatIsInAName function should return a new array containing only the objects from the collection that hgave all the key-value pairs present in the source object.
// 3. If no objects match all the key-value pairs from the source, the function should return an empty array. For example:
// whatIsInAName(
//   [
//     { first: "Romeo", last: "Montague" },
//     { first: "Mercutio", last: null },
//     { first: "Tybalt", last: "Capulet" }
//   ],
//   { last: "Capulet" }
// ); // should return [{ first: "Tybalt", last: "Capulet" }]

// Tests:
const whatIsInAName = (collection, source) => {
    const sourceKeys = Object.keys(source);

    return collection.filter(obj => sourceKeys.every(key => obj.hasOwnProperty(key) && obj[key] === source[key]));
}

console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }))

console.log(whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 }))

console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }))
