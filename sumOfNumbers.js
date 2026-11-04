function getSum(a, b) {
    let sum = 0;
    const min = Math.min(a, b);
    const max = Math.max(a, b); 

    for (let i = min; i <= max; i++) {
        sum += i;
    }

    return sum;
}

// Rumus Gauss
function getSumGauss(a, b) {
    const min = Math.min(a, b);
    const max = Math.max(a, b);

    return (max - min + 1) * (min + max) / 2;
}

console.log(getSum(1, 4));
console.log(getSum(1, -2));

console.log(getSumGauss(1, 8));
console.log(getSumGauss(-8, 10));