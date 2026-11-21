function translatePigLatin(str) {
    const vocalRegex = /^[aiueo]/;
    const consonantRegex = /^([^aiueo]+)(.*)/;

    if (vocalRegex.test(str)) {
        return str + "way";
    } else {
        return str.replace(consonantRegex, "$2$1ay");
    }
}

console.log(translatePigLatin("schwartz"));
