let lunches = [];

function addLunchToEnd(arr, lunchItem) {
    if (Array.isArray(lunchItem)) {
        arr.push(...lunchItem);
    } else {
        arr.push(lunchItem);
    }
    console.log(`${lunchItem} added to the end of the lunch menu.`);
    return arr;
}

function addLunchToStart(arr, lunchItem) {
    if (Array.isArray(lunchItem)) {
        arr.unshift(...lunchItem);
    } else {
        arr.unshift(lunchItem);
    }
    console.log(`${lunchItem} added to the start of the lunch menu.`);
    return arr;
}

function removeLastLunch(arr) {
    if (arr.length >= 1) {
        const lunchItem = arr.pop();
        console.log(`${lunchItem} removed from the end of the lunch menu.`);
    } else {
        console.log("No lunches to remove.");
    }
    return arr;
}

function removeFirstLunch(arr) {
    if (arr.length >= 1) {
        const lunchItem = arr.shift();
        console.log(`${lunchItem} removed from the start of the lunch menu.`);
    } else {
        console.log("No lunches to remove.");
    }
    return arr;
}

function getRandomLunch(arr) {
    if (arr.length >= 1) {
        const randomIndex = Math.floor(Math.random() * arr.length);
        const randomLunch = arr[randomIndex];
        console.log(`Randomly selected lunch: ${randomLunch}`);
        return randomLunch;
    } else {
        console.log("No lunches available.");
    }
}

function showLunchMenu(arr) {
    if (arr.length >= 1) {
        console.log(`Menu items: ${arr.join(", ")}`);
    } else {
        console.log("The menu is empty.");
    }
}