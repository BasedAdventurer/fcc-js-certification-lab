const markdownInput = document.getElementById("markdown-input");
const htmlOutput = document.getElementById("html-output");
const htmlPreview = document.getElementById("preview");

function convertMarkdown() {
    let html = markdownInput.value;

    // 1. Headings (###, ##, #)
    html = html.replace(/^\s*### (.+)/gm, "<h3>$1</h3>");
    html = html.replace(/^\s*## (.+)/gm, "<h2>$1</h2>");
    html = html.replace(/^\s*# (.+)/gm, "<h1>$1</h1>");

    // 2. Blockquotes
    html = html.replace(/^\s*> (.+)/gm, "<blockquote>$1</blockquote>");

    // 3. Images
    html = html.replace(/!\[(.*?)\]\((.*?)\)/g, '<img alt="$1" src="$2">');

    // 4. Links
    html = html.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>');

    // 5. Bold
    html = html.replace(/\*{2}(.+?)\*{2}|__(.+?)__/g, "<strong>$1$2</strong>");

    // 6. Italic
    html = html.replace(/\*(.+?)\*|_(.+?)_/g, "<em>$1$2</em>");

    return html;
}

markdownInput.addEventListener("input", () => {
    const converted = convertMarkdown();
    htmlOutput.textContent = converted;
    htmlPreview.innerHTML = converted;
})
