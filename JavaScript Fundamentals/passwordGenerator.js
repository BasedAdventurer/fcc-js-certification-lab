// Build a Password Generator App

// In this lab, you'll practice using functions by building 
// a random password generator.

// Objective: Fulfill the user stories below and get all 
// the tests to pass to complete the lab.

// User Stories:
// 1. You should create a function called generatePassword that takes a parameter, 
//    indicating the length of generated password. You can name the parameter whatever you like.

// 2. Your function should return a string which represents a randomly generated password. 
//    You should use the following string and different Math methods to help you return 
//    a new string with random characters in it: 
//    ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*().

// 3. You should define a variable called password and assign it the result of calling the 
//    generatePassword function with a numeric argument that represents the desired password length.

// 4. You should have a console.log that logs a single string made by concatenating 
//    the message Generated password: and the password variable separated by a space.

// 1. Dengan For Loop
const generatePassword = length => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';

    let password = '';

    for (let i = 0; i< length; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        password += chars[randomIndex];
    }

    return password;
}

// 2. Dengan Array.from()
const generatePassword2 = length => {
    return Array.from({ length }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
}

// 3. Dengan Pendekatan .at() atau .charAt()
const generatePassword3 = length => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
    let result = '';
    while (length--) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
};


const password = generatePassword(12);
console.log(`Generated password: ${password}`);