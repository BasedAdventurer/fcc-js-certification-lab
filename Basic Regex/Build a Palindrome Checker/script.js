const checkBtn = document.getElementById("check-btn");
const textInput = document.getElementById("text-input");
const results = document.getElementById("result");

function palindrome(text) {
    const cleaned = text.replace(/[^a-z0-9]/gi, "").toLowerCase();
    return cleaned === cleaned.split("").reverse().join("");
}

checkBtn.addEventListener("click", () => {
    if (textInput.value === "") {
        alert("Please input a value");
        return;
    }

    const isPalindrome = palindrome(textInput.value);

    results.innerHTML = isPalindrome ? `<span class="results-text">${textInput.value}</span> is a palindrome.` : `<span class="results-text">${textInput.value}</span> is not a palindrome.`;
});
