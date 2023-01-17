"use strict";
var _a;
const container = document.getElementById("container");
const charCodes = Array.from(Array(26)).map((_element, index) => index + 65);
const alphabet = charCodes.map(charCode => String.fromCharCode(charCode));
console.log(alphabet);
const icons = ["avocado.png", "baguette.png", "banana.png", "barley.png", "biscuit.png", "burger.png", "capsicum.png", "carrot.png", "cauliflower.png",
    "cheese-slice.png", "chilli.png", "chocolate.png", "cutlery.png", "disposable.png", "donut.png", "eggplant.png", "fried-fish.png", "honey-dipper.png", "ice-cream.png",
    "lobster.png", "peas.png", "pizza-slice.png", "toaster.png", "turkey.png", "turnip.png", "waffle.png"];
console.log(icons);
const charsIcons = new Map();
alphabet.forEach((char, index) => charsIcons.set(char, icons[index]));
console.log(charsIcons);
(_a = document.getElementById("form")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", (event) => {
    event.preventDefault();
    generateCriptogram();
});
const generateCriptogram = () => {
    var _a;
    const phrase = (_a = document.getElementById("input-phrase")) === null || _a === void 0 ? void 0 : _a.value.toUpperCase();
    const phraseChars = [...phrase];
    const criptogramContainer = document.getElementById("criptogram-container");
    const criptogram = document.createElement("div");
    criptogram.setAttribute("class", "criptogram");
    let word = document.createElement("div");
    word.setAttribute("class", "word");
    phraseChars.forEach(char => {
        if (char == " ") {
            criptogram.appendChild(word);
            word = document.createElement("div");
            word.setAttribute("class", "word");
        }
        else {
            const letter = addLetter(char);
            word.appendChild(letter);
        }
    });
    criptogram.appendChild(word);
    criptogramContainer === null || criptogramContainer === void 0 ? void 0 : criptogramContainer.appendChild(criptogram);
    console.log(phrase);
    console.log(phraseChars);
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
        image.setAttribute("src", `./icons/${icon}`);
        div.appendChild(letter);
        div.appendChild(image);
        key === null || key === void 0 ? void 0 : key.appendChild(div);
    });
};
const addLetter = (char) => {
    const div = document.createElement("div");
    const letter = document.createElement("h6");
    // letter.innerHTML += char;
    const image = document.createElement("img");
    const icon = charsIcons.get(char);
    image.setAttribute("src", `./icons/${icon}`);
    div.appendChild(letter);
    div.appendChild(image);
    return div;
};
