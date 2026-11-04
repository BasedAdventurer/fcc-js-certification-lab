// function filter_list(l) {
//   // Return a new array with the strings filtered out
//     let filteredList = [];

//     for (let i = 0; i < l.length; i++) {
//         const currentNum = l[i];

//         if (Number.isInteger(currentNum)) {
//             filteredList.push(currentNum);
//         }
//     }

//     return filteredList;
// }

function filter_list(l) {
    return l.filter(item => typeof item === 'number');
}

console.log(filter_list([1,2,'a','b']));
console.log(filter_list([1,'a','b',0,15]));
console.log(filter_list([1,2,'aasf','1','123',123]));


// function duplicateEncoder(word) {
//     const letters = word.toLowerCase().split("");
    
//     return letters
//         .map(char => letters.filter(l => l === char).length > 1 ? ")" : "(")
//         .join("");
// }

// function dnaStrand(dna) {
//     return dna
//         .split("")
//         .map(letter => {
//             if (letter === 'A') return 'T';
//             if (letter === 'T') return 'A';
//             if (letter === 'C') return 'G';
//             if (letter === 'G') return 'C';
//         })
//         .join("");
// }

// console.log(dnaStrand('GTAT'));