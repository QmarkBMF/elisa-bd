const pages = [
    "Лиза, я хотел сначала написать от руки письмо, но, как ты видишь по моему почерку на открытке, с этим у меня были бы сложности, поэтому я сделал эту интерактивную открытку.  Press “CONTINUE” to continue, как говорится.",
    "Перед самим поздравлением хотел бы от чистого сердца поблагодарить тебя за наше общение, твою поддержку и доверие, которые помогали и помогают мне во многом. Мы встретились в непростое время, я был далеко не в самой лучшей своей форме (да и сейчас, думаю, it’s not even my final form), и для меня было шоком, в хорошем смысле, что можно так быстро достичь такого уровня легкости и доверия во взаимодействии с человеком. Мне кажется, мы даже обсуждали через неделю после знакомства и удивлялись, что оно вот так вот оно как то получилось :)",
    "Вот, и в день твоего рождения хочу пожелать тебе пожелать всего настолько хорошего, чтобы прям всё очень хорошо во всех отношениях. ты нереально крутая, супер вайбовая, офигенно красивая, very smart, very strong, very kind, very talented, ультраподдерживающая  и, конечно, топовая училка английского, заботливая пёсомать и вообще top girl.",
    "В новом цикле твоей жизни желаю тебе успехов во всех сферах, лучших клиентов, прибыльных профессиональных движений, самых приятных и увлекающих увлечений, в которых ты, несомненно, покажешь топовый прогресс, результат и вот это вот всё. Конечно, не могу не пожелать здоровья физического и ментального, да и просто оставаться такой офигенной, потому что ты такая и есть.",
    "P.S. Котячий прогноз на твой Новый год - восьмерка палочек. Жизнь набирает обороты, и именно в хорошем смысле. Появляется больше вещей вокруг, которые привлекают тебя, и увлечение ими, те усилия, которые ты приложишь к ним, могут привести к быстрым и сильным переменам."
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
    skipButton.style.display = "inline-block";
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
        continueButton.style.display = "inline-block";
    }
}

function showPage(page) {
    currentPage = page;
    startTyping();
    if (page > 0) {
        backButton.style.display = "inline-block";
    } else {
        backButton.style.display = "none";
    }
    startButton.style.display = "inline-block";
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
    continueButton.style.display = "inline-block";
});

continueButton.addEventListener("click", () => {
    if (currentPage < pages.length - 1) {
        showPage(currentPage + 1);
    } else {
        typedTextElement.innerHTML = "Спасибо за внимание! \n*играет Electric Youth - Real Hero*";
        continueButton.style.display = "none";
    }
});

backButton.addEventListener("click", () => {
    if (currentPage > 0) {
        showPage(currentPage - 1);
    }
});

startButton.addEventListener("click", () => {
    textArea.style.display = "none";
    letterElement.style.display = "flex";
    currentPage = 0;
});
