// The goal of this exercise is to convert a string to a new string where each character in the new string is 
// "(" if that character appears only once in the original string, or ")" if that character appears more than once in 
// the original string. Ignore capitalization when determining if a character is a duplicate.

// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 

// function duplicateEncode(word) {
//     const resultEncoder = [];
//     const wordArr = word.toLowerCase().split("");

//     for (let i = 0; i < wordArr.length; i++) {
//         const currentWord = wordArr[i];
//         const count = wordArr.filter(l => l === currentWord).length;

//         if (count <= 1) {
//             resultEncoder.push("(");
//         } else {
//             resultEncoder.push(")");
//         }
//     }

//     const resultStr = resultEncoder.join(""); 
    
//     return resultStr;
// }

// console.log(duplicateEncode("recede"));

function duplicateEncoder(word) {
    const letters = word.toLowerCase().split("");
    
    return letters
        .map(char => letters.filter(l => l === char).length > 1 ? ")" : "(")
        .join("");
}
