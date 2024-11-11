const pages = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.",
    "Cras vehicula, nisi eu consectetur venenatis, lorem nibh placerat elit, in laoreet magna ligula eu nunc.",
    "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
];

let currentPage = 0;
let currentChar = 0;
let typingInterval;

const letterElement = document.getElementById("letter");
const textArea = document.getElementById("text-area");
const typedTextElement = document.getElementById("typed-text");
const openButton = document.getElementById("open-button");
const skipButton = document.getElementById("skip-button");
const continueButton = document.getElementById("continue-button");
const backButton = document.getElementById("back-button");
const startButton = document.getElementById("start-button");

function startTyping() {
    clearInterval(typingInterval);
    typedTextElement.innerHTML = "";
    currentChar = 0;
    skipButton.style.display = "inline";
    continueButton.style.display = "none";
    typingInterval = setInterval(typeCharacter, 50);
}

function typeCharacter() {
    if (currentChar < pages[currentPage].length) {
        typedTextElement.innerHTML += pages[currentPage][currentChar];
        currentChar++;
    } else {
        clearInterval(typingInterval);
        skipButton.style.display = "none";
        continueButton.style.display = "inline";
    }
}

function showPage(page) {
    currentPage = page;
    startTyping();
    if (page > 0) {
        backButton.style.display = "inline";
    } else {
        backButton.style.display = "none";
    }
    startButton.style.display = "inline"; // Show the START button on text pages
}

openButton.addEventListener("click", () => {
    letterElement.style.display = "none";
    textArea.style.display = "block";
    showPage(currentPage);
});

skipButton.addEventListener("click", () => {
    clearInterval(typingInterval);
    typedTextElement.innerHTML = pages[currentPage];
    skipButton.style.display = "none";
    continueButton.style.display = "inline";
});

continueButton.addEventListener("click", () => {
    if (currentPage < pages.length - 1) {
        showPage(currentPage + 1);
    } else {
        typedTextElement.innerHTML = "Thank you for reading!";
        continueButton.style.display = "none";
    }
});

backButton.addEventListener("click", () => {
    if (currentPage > 0) {
        showPage(currentPage - 1);
    }
});

startButton.addEventListener("click", () => {
    // Return to the start (letter) page
    textArea.style.display = "none";
    letterElement.style.display = "flex";
    currentPage = 0;
});
