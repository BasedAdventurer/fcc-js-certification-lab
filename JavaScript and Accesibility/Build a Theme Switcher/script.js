const themes =  [
                    {name: "light", message: "light theme is on!"},
                    {name: "dark", message: "dark theme is on!"},
                    {name: "ocean", message: "ocean theme is on!"},
                    {name: "nord", message: "nord theme is on!"}
                ];

const themesButton = document.getElementById("theme-switcher-button");
const themesDropdown = document.getElementById("theme-dropdown");

themesButton.addEventListener("click", () => {
    if (themesDropdown.hidden === true) {
        themesDropdown.hidden = false;
        themesButton.setAttribute("aria-expanded", "true");
    } else {
        themesDropdown.hidden = true;
        themesButton.setAttribute("aria-expanded", "false");
    }
});

const themesSelection = document.querySelectorAll("#theme-dropdown li");
const body = document.querySelector("body");
const status = document.getElementById("status");
const themeNames = themes.map((t) => `theme-${t.name}`);

themesSelection.forEach((selection) => {
    selection.addEventListener("click", () => {
        const themeValue = selection.textContent.trim().toLowerCase();
        const selected = themes.find((t) => t.name === themeValue);
        if (!selected) return;

        body.classList.remove(...themeNames);
        body.classList.add(`theme-${themeValue}`);
        status.textContent = selected.message;
        themesDropdown.hidden = "true";
    });
});
