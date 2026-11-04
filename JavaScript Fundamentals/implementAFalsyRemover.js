// Implement a Falsy Remover

// In this lab you will create a function that removes all falsy values
// from an array.

// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

// Objective: Fulfill the user stories below and get all the tests
// to pass to complete the lab.

// User Stories:
// 1. You should have a bouncer function that takes an array as argument.
// 2. The bouncer function should return a new array that contains the same elements 
//    as the array passed in as argument with the falsy elements removed.
// 3. The bouncer function should not change the array passed in as an argument.

// Hint: Try converting each value to a Boolean.

// 1. Menggunakan For Loop
const bouncer = arr => {
    const newArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (!!arr[i]) {
            newArr.push(arr[i]);
        }
    }

    return newArr;
}

// 2. Menggunakan .filter() + Double NOT (!!)
const bouncer2 = arr => arr.filter(item => !!item);

// 3. Menggunakan .filter() + Boolean
const bouncer3 = arr => arr.filter(Boolean);

console.log(bouncer([7, "ate", "", false, 9]));
console.log(bouncer(["a", "b", "c"]));
console.log(bouncer2([false, null, 0, NaN, undefined, ""]));
console.log(bouncer3([null, NaN, 1, 2, undefined]));

