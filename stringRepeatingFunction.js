function repeatStringNumTimes(str, num) {
    let repeatStr = "";

    for (let i = 0; i < num; i++) {
        repeatStr += str;
    }

    return repeatStr;
}

console.log(repeatStringNumTimes("*", 8));