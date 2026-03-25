function analyzeText() {
    let text = document.getElementById("textInput").value;

    let charCount = text.length;

    let words = text.trim().split(/\s+/);
    let wordCount = text.trim() === "" ? 0 : words.length;

    let reversed = text.split("").reverse().join("");

    document.getElementById("charCount").innerText = charCount;
    document.getElementById("wordCount").innerText = wordCount;
    document.getElementById("reversedText").innerText = reversed;
}