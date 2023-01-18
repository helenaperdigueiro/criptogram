"use strict";
// (function () {
var _a;
const container = document.getElementById("container");
const charCodes = Array.from(Array(26)).map((_element, index) => index + 65);
const alphabet = charCodes.map(charCode => String.fromCharCode(charCode));
const icons = ["avocado.png", "baguette.png", "banana.png", "barley.png", "biscuit.png", "burger.png", "capsicum.png", "carrot.png", "cauliflower.png",
    "cheese-slice.png", "chilli.png", "chocolate.png", "cutlery.png", "disposable.png", "donut.png", "eggplant.png", "fried-fish.png", "honey-dipper.png", "ice-cream.png",
    "lobster.png", "peas.png", "pizza-slice.png", "toaster.png", "turkey.png", "turnip.png", "waffle.png"];
const charsIcons = new Map();
alphabet.forEach((char, index) => charsIcons.set(char, icons[index]));
(_a = document.getElementById("form")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", (event) => {
    event.preventDefault();
    generateCriptogram();
});
const criptogramsContainer = document.getElementById("criptograms-container");
const generateCriptogram = () => {
    var _a;
    const phrase = (_a = document.getElementById("input-phrase")) === null || _a === void 0 ? void 0 : _a.value.toUpperCase();
    const phraseChars = [...phrase];
    const criptogramContainer = document.createElement("div");
    criptogramContainer.setAttribute("class", "criptogram-container");
    const criptogramBtns = document.createElement("div");
    criptogramBtns.setAttribute("class", "criptogram-btns");
    const btnDeleteCriptogram = document.createElement("img");
    btnDeleteCriptogram.setAttribute("class", "btn-delete-criptogram");
    btnDeleteCriptogram.setAttribute("src", "./icons/btns/cancel.png");
    btnDeleteCriptogram.addEventListener("click", () => criptogramContainer.remove());
    criptogramBtns.appendChild(btnDeleteCriptogram);
    criptogramContainer.appendChild(criptogramBtns);
    const criptogram = document.createElement("div");
    criptogram.setAttribute("class", "criptogram");
    let word = document.createElement("div");
    word.setAttribute("class", "word");
    let letter;
    phraseChars.forEach(char => {
        if (char == " ") {
            criptogram.appendChild(word);
            word = document.createElement("div");
            word.setAttribute("class", "word");
        }
        else {
            letter = addLetter(char);
            word.appendChild(letter);
        }
    });
    criptogram.appendChild(word);
    criptogramContainer.appendChild(criptogram);
    criptogramsContainer === null || criptogramsContainer === void 0 ? void 0 : criptogramsContainer.appendChild(criptogramContainer);
    printKey();
};
const printKey = () => {
    const key = document.getElementById("key");
    while (key === null || key === void 0 ? void 0 : key.firstChild) {
        key.removeChild(key.firstChild);
    }
    ;
    charsIcons.forEach((icon, char) => {
        const div = document.createElement("div");
        const letter = document.createElement("h6");
        letter.innerHTML += char;
        const image = document.createElement("img");
        image.setAttribute("src", `./icons/food-theme/${icon}`);
        div.appendChild(letter);
        div.appendChild(image);
        key === null || key === void 0 ? void 0 : key.appendChild(div);
    });
};
const addLetter = (char) => {
    const div = document.createElement("div");
    const letterContainer = document.createElement("div");
    letterContainer.setAttribute("class", "letter-container");
    const letter = document.createElement("h6");
    letter.setAttribute("class", "criptogram-letter hidden");
    letter.innerHTML += char;
    const image = document.createElement("img");
    const icon = charsIcons.get(char);
    image.setAttribute("src", `./icons/food-theme/${icon}`);
    letterContainer.appendChild(letter);
    div.appendChild(letterContainer);
    div.appendChild(image);
    return div;
};
const btnShowPhraseCriptogram = document.getElementById("btn-show-hide");
btnShowPhraseCriptogram === null || btnShowPhraseCriptogram === void 0 ? void 0 : btnShowPhraseCriptogram.addEventListener("click", () => {
    let src = btnShowPhraseCriptogram.getAttribute("src") == "./icons/btns/show.png" ? "./icons/btns/hide.png" : "./icons/btns/show.png";
    btnShowPhraseCriptogram.setAttribute("src", src);
    const letters = Array.from(document.getElementsByClassName("criptogram-letter"));
    letters.forEach(letter => {
        letter.classList.toggle("hidden");
    });
});
// })();
