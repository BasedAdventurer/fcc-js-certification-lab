function myReplace(str, originalWord, replacedWord) {
    const isUpperCase = /^[A-Z]/.test(originalWord);

    replacedWord = isUpperCase ? replacedWord[0].toUpperCase() + replacedWord.slice(1) : replacedWord[0].toLowerCase() + replacedWord.slice(1);

    return str.replace(originalWord, replacedWord);
}

console.log(myReplace("Let us go to the Store", "Store", "mall"))
