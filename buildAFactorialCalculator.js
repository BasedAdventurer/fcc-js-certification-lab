function factorialCalculator(num) {
    let result = 1;

    for (let i = 1; i < num; i++) {
        result = result * (i + 1);
    }

    return result;
}

const num = 5;
const factorial = factorialCalculator(num);
const resultMsg = `Factorial of ${num} is ${factorial}`;

console.log(resultMsg);