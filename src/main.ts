(function () {

    const init = () => {
        const container = document.getElementById("container");

        const charCodes: readonly number[] = Array.from(Array(26)).map((_element, index) => index + 65);
        const alphabet: readonly string[] = charCodes.map(charCode => String.fromCharCode(charCode));

        const icons: readonly string[] = ["avocado.png", "baguette.png", "banana.png", "barley.png", "biscuit.png", "burger.png", "capsicum.png", "carrot.png", "cauliflower.png",
            "cheese-slice.png", "chilli.png", "chocolate.png", "cutlery.png", "disposable.png", "donut.png", "eggplant.png", "fried-fish.png", "honey-dipper.png", "ice-cream.png",
            "lobster.png", "peas.png", "pizza-slice.png", "toaster.png", "turkey.png", "turnip.png", "waffle.png"];

        let currentKey: Map<string, string> = new Map();
        const shuffleKey = () => {
            alphabet.forEach((char, index) => currentKey.set(char, icons[Math.floor(Math.random() * icons.length)]));
        }

        document.getElementById("form")?.addEventListener("submit", (event) => {
            event.preventDefault();
            generateCriptogram();
        });

        const criptogramsContainer = document.getElementById("criptograms-container");

        const generateCriptogram = () => {
            const input = document.getElementById("input-phrase") as HTMLInputElement;
            const phrase: string = input?.value.toUpperCase();
            const phraseChars: string[] = [...phrase];
            input.value = "";
            const criptogramContainer = document.createElement("div");
            criptogramContainer.classList.add("criptogram-container");

            const criptogramBtns = document.createElement("div");
            criptogramBtns.classList.add("criptogram-btns");

            const btnDeleteCriptogram = document.createElement("img");
            btnDeleteCriptogram.classList.add("btn-delete-criptogram");
            btnDeleteCriptogram.setAttribute("src", "./icons/btns/delete.png");
            btnDeleteCriptogram.addEventListener("click", () => criptogramContainer.remove());
            criptogramBtns.appendChild(btnDeleteCriptogram);

            criptogramContainer.appendChild(criptogramBtns);
            const criptogram = document.createElement("div");
            criptogram.classList.add("criptogram");
            let word = document.createElement("div");
            word.classList.add("word");
            let letter: HTMLDivElement;

            phraseChars.forEach(char => {
                if (char == " ") {
                    criptogram.appendChild(word);
                    word = document.createElement("div");
                    word.classList.add("word");
                } else {
                    letter = addLetter(char);
                    word.appendChild(letter);
                }
            });
            criptogram.appendChild(word);
            criptogramContainer.appendChild(criptogram);
            criptogramsContainer?.appendChild(criptogramContainer);

        }

        const printKey = () => {
            shuffleKey();
            let keyContainer = document.getElementById("key-container");
            let key = document.getElementById("key");
            key?.remove();
            key = document.createElement("div");
            key.setAttribute("id", "key");
            currentKey.forEach((icon, char) => {
                const div = document.createElement("div");
                const letter = document.createElement("h6");
                letter.innerHTML += char;
                const image = document.createElement("img");
                image.setAttribute("src", `./icons/food-theme/${icon}`);
                div.appendChild(letter);
                div.appendChild(image);
                key?.appendChild(div);
            });
            keyContainer?.appendChild(key);
        }

        const addLetter = (char: string) => {
            const div = document.createElement("div");
            const letterContainer = document.createElement("div");
            letterContainer.classList.add("letter-container")
            const letter = document.createElement("h6");
            letter.classList.add("criptogram-letter")
            letter.innerHTML += char;
            const image = document.createElement("img");
            const icon = currentKey.get(char);
            image.setAttribute("src", `./icons/food-theme/${icon}`);
            letterContainer.appendChild(letter);
            div.appendChild(letterContainer);
            div.appendChild(image);
            return div;
        }

        const btnShowHide = document.getElementById("btn-show-hide");
        btnShowHide?.addEventListener("click", () => {
            let src = btnShowHide.getAttribute("src") == "./icons/btns/show.png" ? "./icons/btns/hide.png" : "./icons/btns/show.png";
            btnShowHide.setAttribute("src", src);
            criptogramsContainer?.setAttribute("hidden-letters", `${!(criptogramsContainer.getAttribute("hidden-letters") == "true")}`);
        })

        const deleteAllCriptograms = () => {
            criptogramsContainer?.replaceChildren();
        }
        const bntDeleteAll = document.getElementById("btn-delete-all");
        bntDeleteAll?.addEventListener("click", deleteAllCriptograms);

        const btnShuffleKey = document.getElementById("btn-shuffle-key");
        btnShuffleKey?.addEventListener("click", () => {
            deleteAllCriptograms();
            printKey();
        });

        printKey();
    };

    window.addEventListener('load', init);

})();