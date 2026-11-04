function mutation(arr) {
    const firstWord = arr[0].toLowerCase();
    const secondWord = arr[1].toLowerCase();

    if (firstWord.trim() === "" || secondWord.trim() === "") {
        return false;
    }

    for (const char of secondWord) {
        if (!firstWord.includes(char)) {
        return false;
        }
    }

    return true;
}
console.log(mutation(["hello", "hey"]));
console.log(mutation(["hello", "hello"]));
console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]));
console.log(mutation(["Mary", "Army"]));
console.log(mutation(["Mary", "Aarmy"]));
console.log(mutation(["Alien", "line"]));
console.log(mutation(["floor", "for"]));
console.log(mutation(["hello", "neo"]));
console.log(mutation(["voodoo", "no"]));
console.log(mutation(["ate", "date"]));
console.log(mutation(["Tiger", "Zebra"]));
console.log(mutation(["Noel", "Ole"]));