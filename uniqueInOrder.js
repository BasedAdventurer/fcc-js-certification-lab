var uniqueInOrder=function(iterable){
    //your code here - remember iterable can be a string or an array
    let iterableArr;

    if (typeof iterable === "string") {
        iterableArr = iterable.split("");
    } else {
        iterableArr = iterable;
    }

    return iterableArr.filter((item, index) => { 
        return item !== iterableArr[index + 1] 
    });
}

console.log(uniqueInOrder('AAAABBBCCDAABBB'));