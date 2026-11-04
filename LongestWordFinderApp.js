function findLongestWordLength(sentence) {
    if (sentence.trim() === "") {
        return 0;
    }

    const words = sentence.trim().split(" ");
    let count = 0;

    for (const word of words) {
        if (word !== "" && word.length > count) {
        count = word.length;
        }
    }

    return count;
}

console.log(findLongestWordLength("May the force be with you"));

// Alternative Modern Way
// function findLongestWordLength(sentence) {
//   return Math.max(...sentence.split(" ").map(word => word.length));
// }