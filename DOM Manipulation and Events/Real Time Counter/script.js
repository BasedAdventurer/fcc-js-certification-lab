const textInput = document.getElementById("text-input");
const charCount = document.getElementById("char-count");
const maxChars = 50;

textInput.addEventListener("input", (e) => {
    if (e.target.value.length > maxChars) {
        e.target.value = e.target.value.slice(0, maxChars);
    }

    if (e.target.value.length === maxChars) {
        charCount.style.color = "red";
    } else {
        charCount.style.color = "#354f4f";
    }

    charCount.textContent = `Character Count: ${e.target.value.length}/${maxChars}`;
});
