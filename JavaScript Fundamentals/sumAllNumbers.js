// Design a Sum All Numbers Algorithm

// In this lab, you will need to design a sum all numbers algorithm
// Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

// User Stories:
// 1. You should have a function named sumAll that accepts an array of two numbers.

// 2. sumAll([n, m]) should return the sum of n and m plus the sum of all the numbers between them. 
//    The lowest number will not always come first. For example, sumAll([4,1]) should return 10 because 
//    sum of all the numbers between 1 and 4 (both inclusive) is 10.

// 1. Dengan For Loop
const sumAll = ([n, m]) => {
    const min = Math.min(n, m);
    const max = Math.max(n, m);
    let sum = 0;

    for (let i = min; i <= max; i++) {
        sum += i;
    }
    
    return sum;
};

// 2. Dengan Rumus Deret Aritmatika Gauss
const sumAll2 = ([n, m]) => {
    const min = Math.min(n, m);
    const max = Math.max(n, m);

    // Rumus Gauss: (jumlah elemen) * (elemen pertama + elemen terakhir) / 2
    return ((max - min + 1) * (min + max)) / 2;
}

// Test Output
console.log(sumAll([5, 10]));
console.log(sumAll([5, 10]));


