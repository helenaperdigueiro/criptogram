
const container = window.document.getElementById("container");

const charCodes: readonly number[] = Array.from(Array(2)).map((_element, index) => index + 65);
const alphabet: readonly string[] = charCodes.map(charCode => String.fromCharCode(charCode));
console.log(alphabet);

const icons: readonly string[] = ["avocado.png", "baguette.png"];
console.log(icons);

const charsIcons: Map<string, string> = new Map();
alphabet.forEach((char, index) => charsIcons.set(char, icons[index]));
console.log(charsIcons);

const printKey = () => {
    const key = document.getElementById("key");
    charsIcons.forEach((icon, char) => {
        const div = document.createElement("div");
        const letter = document.createElement("h6");
        letter.innerHTML += char;
        const image = document.createElement("img");
        image.setAttribute("src", `./icons/${icon}`);
        div.appendChild(letter);
        div.appendChild(image);
        key?.appendChild(div);
    });
}

const btnTest = window.document.getElementById("btn-test");
btnTest?.addEventListener("click", printKey)


