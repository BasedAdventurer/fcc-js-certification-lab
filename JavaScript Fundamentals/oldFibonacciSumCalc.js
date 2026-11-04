// Build an Odd Fibonacci Sum Calculator

// In this lab you will build an old Fibonacci sum calc that computes
// the sum of all odd Fibonacci numbers that are less than or equal to a given positive integer.

// Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

// User Stories:
// 1. You should have a sumFibs function that accepts a number as an argument.

// 2. The sumFibs function should return the sum of all odd Fibonacci numbers 
//    that are less than or equal to the given number.

// 3. The Fibonacci sequence starts with 0 and 1, and each subsequent number 
//    is the sum of the two previous ones.

// 4. Only the odd Fibonacci numbers should be added to the sum.

// 1. Dengan while loop (paling efisien dan idiomatic)
const sumFibs = number => {
    let a = 0;
    let b = 1;
    let sum = 0;
    const sequence = [0];

    while (b <= number) {
        sequence.push(b);
        if (b % 2 !== 0) {
            sum += b;    
        }

        [a, b] = [b, a + b];
    }

    console.log("Deret Fibonacci:", sequence);
    return sum;
}

// 2. Dengan Array + filter() + reduce()
const sumFibs2 = number => {
    const fibs = [0, 1];

    // Generate deret ke dalam array
    while (fibs[fibs.length - 1] + fibs[fibs.length - 2] <= number) {
        fibs.push(fibs[fibs.length - 1] + fibs[fibs.length - 2]);
    }
    
    // Filter yang ganjil saja, lalu jumlahkan pakai reduce
    return fibs.filter(n => n % 2 !== 0).reduce((sum, n) => sum + n, 0);
}

// Test Output
console.log(sumFibs(5));
console.log(sumFibs(1000));