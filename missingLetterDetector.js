function fearNotLetter(str) {
    for (let i = 0; i < str.length - 1; i++) {
        let currentCharCode = str.charCodeAt(i);
        let nextCharCode = str.charCodeAt(i + 1);

        if (nextCharCode - currentCharCode !== 1) {
        return String.fromCharCode(currentCharCode + 1);
        }
    }

    return;
}

console.log(fearNotLetter("abce"));
console.log(fearNotLetter("abcdefghjklmno"));
console.log(fearNotLetter("stvwx"));
console.log(fearNotLetter("bcdf"));
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));
