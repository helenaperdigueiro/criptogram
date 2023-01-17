var container = window.document.getElementById("container");
var charCodes = Array.from(Array(2)).map(function (_element, index) { return index + 65; });
var alphabet = charCodes.map(function (charCode) { return String.fromCharCode(charCode); });
console.log(alphabet);
var icons = ["avocado.png", "baguette.png"];
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
