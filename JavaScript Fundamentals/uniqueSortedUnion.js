// Implement a Unique Sorted Union

// Objective: Fulfill the user stories below and get all the tests to pass
// to complete the lab.

// User Stories:
// 1. You should have a function named uniteUnique.
// 2. The uniteUnique function should accept two or more arrays as arguments.
// 3. The function should return a new array that contains unique values from 
//    the argument arrays, in the order they are first found in the arguments. 
//    For example, an input like [1, 2, 4], [2, 3, 5] would have an output of [1, 2, 4, 3, 5].

// 1. Menggunakan Array + .includes() (Pengecekan manual)
const uniteUnique1 = (...arrays) => {
    const result = [];
    for (const arr of arrays) {
        for (const val of arr) {
        if (!result.includes(val));
            result.push(val);
        }
    }
    return result;
};

// 2. Menggunakan Set (Otomatis membuang duplikat)
const uniteUnique2 = (...arrays) => {
    const uniqueValues = new Set();

    for (const arr of arrays) {
        for (const value of arr) {
            uniqueValues.add(value);
        }
    }

    return Array.from(uniqueValues);
}

// 3. Versi Super Ringkas (Set dengan flat().method)
const uniteUnique3 = (...arrays) => [...new Set(arrays.flat())];

console.log(uniteUnique3([1, 2, 3], [2, 3, 5]));

