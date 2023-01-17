"use strict";
var container = window.document.getElementById("container");
var charCodes = Array.from(Array(26)).map(function (_element, index) { return index + 65; });
var alphabet = charCodes.map(function (charCode) { return String.fromCharCode(charCode); });
console.log(alphabet);
var icons = ["avocado.png", "baguette.png", "banana.png", "barley.png", "biscuit.png", "burger.png", "capsicum.png", "carrot.png", "cauliflower.png",
    "cheese-slice.png", "chilli.png", "chocolate.png", "cutlery.png", "disposable.png", "donut.png", "eggplant.png", "fried-fish.png", "honey-dipper.png", "ice-cream.png",
    "lobster.png", "peas.png", "pizza-slice.png", "toaster.png", "turkey.png", "turnip.png", "waffle.png"];
console.log(icons);
var charsIcons = new Map();
alphabet.forEach(function (char, index) { return charsIcons.set(char, icons[index]); });
console.log(charsIcons);
var printKey = function () {
    var key = document.getElementById("key");
    charsIcons.forEach(function (icon, char) {
        var div = document.createElement("div");
        var letter = document.createElement("h6");
        letter.innerHTML += char;
        var image = document.createElement("img");
        image.setAttribute("src", "./icons/".concat(icon));
        div.appendChild(letter);
        div.appendChild(image);
        key === null || key === void 0 ? void 0 : key.appendChild(div);
    });
};
var btnTest = window.document.getElementById("btn-test");
btnTest === null || btnTest === void 0 ? void 0 : btnTest.addEventListener("click", printKey);
