const numbers = [1, 1, 1, 1, 1];
let sum = 0;
const forEachRes = numbers.forEach(num => {
  return (sum += num);
});
const mapRes = numbers.map(num => {
  return (sum += num);
});

console.log(forEachRes, mapRes)

const sorted = [, undefined, 'a', 'b', { 20: 5 }].sort();
console.log(sorted)

let numbersd = [2, 4, 8, 10];

numbersd.forEach(function(number) {
    console.log(number % 2);
});

const originalArray = [{ id: 1 }, { id: 2 }, { id: 3 }];
const filteredArray = originalArray.filter(item => item.id > 1);
filteredArray[0].id = 4;
console.log(originalArray);
