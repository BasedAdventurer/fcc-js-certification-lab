function isPalindrome(word) {
    let reversed = "";
    const cleanWord = word.toLowerCase();

    for (let i = cleanWord.length - 1; i >= 0; i--) {
        reversed += cleanWord[i];
    }

    return cleanWord === reversed;
}

// console.log(isPalindrome("Katak"));

function findPalindromeBreaks(words) {
    const nonPalindromeIndices = [];

    for (let i = 0; i < words.length; i++) {
        if (!isPalindrome(words[i])) {
        nonPalindromeIndices.push(i);
        }
    }
    return nonPalindromeIndices;
}

// console.log(findPalindromeBreaks(["katak", "halo", "radar", "koding"]));

function findRepeatedPhrases(words, phraseLength) {
    const phrases = [];

    if (phraseLength  >= words.length) {
        return [];
    }

    for (let i = 0; i <= words.length - phraseLength; i++) {
        const currentPhrase = words.slice(i, i + phraseLength).join(" ");

        phrases.push(currentPhrase);
    }

    const resultIndices = [];

    for (let i = 0; i < phrases.length; i++) {
        const currentPhrase = phrases[i];
        const count = phrases.filter(p => p === currentPhrase).length;

        if (count > 1) {
        resultIndices.push(i);
        }
    }

    return resultIndices;
}

// console.log(findRepeatedPhrases(["apple", "banana", "apple", "banana", "cherry"], 2));

function analyzeTexts(texts, phraseLength) {
    const analysisResults = [];

    if (texts.length === 0) {
        return [];
    }

    for (let i = 0; i < texts.length; i++) {
        const words = texts[i];

        const repeated = findRepeatedPhrases(words, phraseLength);
        const breaks = findPalindromeBreaks(words);

        analysisResults.push({
        repeatedPhrases: repeated,
        palindromeBreaks: breaks
        });
    }

    return analysisResults;
}

console.log(analyzeTexts([["katak", "kopi", "katak"], ["radar", "halo"]], 2));

// Dengan .map()
// function analyzeTexts(texts, phraseLength) {
//   return texts.map(words => ({
//     repeatedPhrases: findRepeatedPhrases(words, phraseLength),
//     palindromeBreaks: findPalindromeBreaks(words)
//   }));
// }

