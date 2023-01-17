
const container = window.document.getElementById("container");

const charCodes: readonly number[] = Array.from(Array(26)).map((_element, index) => index + 65);
const alphabet: readonly string[] = charCodes.map(charCode => String.fromCharCode(charCode));
console.log(alphabet);

const icons: readonly string[] = ["avocado.png", "baguette.png", "banana.png", "barley.png", "biscuit.png", "burger.png", "capsicum.png", "carrot.png", "cauliflower.png", 
"cheese-slice.png", "chilli.png", "chocolate.png", "cutlery.png", "disposable.png", "donut.png", "eggplant.png", "fried-fish.png", "honey-dipper.png", "ice-cream.png", 
"lobster.png", "peas.png", "pizza-slice.png", "toaster.png", "turkey.png", "turnip.png", "waffle.png"];
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


