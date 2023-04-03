const buttons = [
    {
        title: "Plant Everything mod",
        url: "https://www.nexusmods.com/valheim/mods/1042",
    },
    {
        title: "Auto Feed",
        url: "https://www.nexusmods.com/valheim/mods/985",
    },
    {
        title: "Multi Craft",
        url: "https://www.nexusmods.com/valheim/mods/263?tab=files",
    },
    {
        title: "Mass Farming",
        url: "https://valheim.thunderstore.io/package/k942/MassFarming/",
    },
    {
        title: "Automatic Fuel",
        url: "https://valheim.thunderstore.io/package/TastyChickenLegs/AutomaticFuel/",
    },
    {
        title: "Toggle Movement",
        url: "https://valheim.thunderstore.io/package/GetOffMyLawn/ToggleMovementMod/",
    },
    {
        title: "Multi User Chest",
        url: "https://valheim.thunderstore.io/package/MSchmoecker/MultiUserChest/",
    },
    {
        title: "Craft from containers",
        url: "https://valheim.thunderstore.io/package/DrZed/CraftFromContainers/",
    },
    {
        title: "Odin Banners",
        url: "https://valheim.thunderstore.io/package/OdinPlus/OdinBanners/",
    },
    {
        title: "Viking Sails",
        url: "https://valheim.thunderstore.io/package/Azumatt/VikingSails/",
    },
    {
        title: "Comfy Signs",
        url: "https://valheim.thunderstore.io/package/ComfyMods/ComfySigns/",
    },
    {
        title: "Simple Auto Sort",
        url: "https://valheim.thunderstore.io/package/DaddelBude/ValheimSimpleAutoSort/",
    },
    {
        title: "Quick Stack Store Trash Restock",
        url: "https://valheim.thunderstore.io/package/Goldenrevolver/Quick_Stack_Store_Sort_Trash_Restock/",
    },
    {
        title: "Adventure Backpacks",
        url: "https://valheim.thunderstore.io/package/Vapok/AdventureBackpacks/",
    },
    {
        title: "Odin Campsite",
        url: "https://valheim.thunderstore.io/package/OdinPlus/OdinCampsite/",
    },
    {
        title: "Recycle",
        url: "https://valheim.thunderstore.io/package/nexusreupload/Ivaylo_Lafchiev_Deathwalkx_ValheimRecycle/",
    },
    {
        title: "Use Equipment In Water",
        url: "https://valheim.thunderstore.io/package/LVH-IT/UseEquipmentInWater/",
    },
    {
        title: "Floating Items",
        url: "https://valheim.thunderstore.io/package/VentureValheim/Venture_Floating_Items/",
    }

    // Add more button objects here
];

document.addEventListener("DOMContentLoaded", () => {

    if (sessionStorage.getItem("isLoggedIn") === "true") {
        document.querySelector(".command-prompt").style.display = "block";
    }


    const container = document.querySelector(".container");
    buttons.forEach((button) => {
        const btn = document.createElement("button");
        btn.classList.add("mod-button");
        btn.textContent = button.title;
        btn.onclick = () => window.open(button.url);
        container.appendChild(btn);
    });




    let commandHistory = [];
    let currentHistoryIndex = -1;
    let ctrlPressed = false;
    let altPressed = false;

    document.addEventListener("keydown", (event) => {
        if (event.code === "ControlLeft" || event.code === "ControlRight") {
            ctrlPressed = true;
        }

        if (event.code === "AltLeft" || event.code === "AltRight") {
            altPressed = true;
        }

        if (ctrlPressed && altPressed && (event.code === "KeyC" || event.key === "c" || event.key === "C")) {
            if (sessionStorage.getItem("isLoggedIn") === "true") {
                const consoleElement = document.querySelector('.command-prompt');

                if (consoleElement.style.display === 'none' || consoleElement.style.display === '') {
                    consoleElement.style.display = 'block';
                } else {
                    consoleElement.style.display = 'none';
                }
            } else {
                window.location.href = "login.html";
            }

        }

        if (event.code === "ArrowUp") {
            if (currentHistoryIndex > 0) {
                currentHistoryIndex--;
            }
            const previousCommand = commandHistory[currentHistoryIndex];
            commandInput.value = previousCommand;
        } else if (event.code === "ArrowDown") {
            if (currentHistoryIndex < commandHistory.length - 1) {
                currentHistoryIndex++;
            } else {
                currentHistoryIndex = commandHistory.length;
                commandInput.value = "";
                return;
            }
            const nextCommand = commandHistory[currentHistoryIndex];
            commandInput.value = nextCommand;
        }
    });


    document.addEventListener("keyup", (event) => {
        if (event.code === "ControlLeft" || event.code === "ControlRight") {
            ctrlPressed = false;
        }

        if (event.code === "AltLeft" || event.code === "AltRight") {
            altPressed = false;
        }
    });

    function printToConsole(message) {
        const consoleOutput = document.querySelector(".console-output");
        consoleOutput.textContent += message + "\n";
        consoleOutput.scrollTop = consoleOutput.scrollHeight;
    }


    function processCommand(command) {
        const consoleOutput = document.querySelector(".console-output");
        consoleOutput.innerHTML = ""; // Clear previous output
        const args = command.split(/\s+/); // split command by one or more whitespaces
        const cmd = args.shift().toLowerCase(); // extract the first argument as the command and remove it from args

        function handleAddButtonCommand(command) {
            const args = command.split(' ');
            const title = args.slice(1, args.indexOf('-')).join(' ');

            let url;
            try {
                url = command.match(/-(https?:\/\/\S+)/)[1];
            } catch (error) {
                printToConsole("Error: Invalid URL format");
                printToConsole("Usage: /addbutton [title] -[link]");
                return;
            }

            const isValidUrl = (url) => /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/.test(url);

            let finalUrl = url;
            if (!url.startsWith('http://') && !url.startsWith('https://')) {
                finalUrl = 'https://' + url;
            }

            if (!title || !url) {
                printToConsole("Error: Need button title and link");
                printToConsole("Usage: /addbutton [title] -[link]");
                return;
            } else if (!isValidUrl(finalUrl)) {
                printToConsole("Error: Invalid Url");
                return;
            }

            const newButton = {
                title: title.trim(),
                url: finalUrl.trim(),
            };

            buttons.push(newButton);

            const btn = document.createElement("button");
            btn.classList.add("mod-button");
            btn.textContent = newButton.title;
            btn.onclick = () => window.open(newButton.url);
            container.appendChild(btn);
        }

        function setOpacity(opacity) {
            if (opacity >= 0 && opacity <= 1) {
                document.querySelector('.command-prompt').style.backgroundColor = `rgba(0, 0, 0, ${opacity})`;
                printToConsole(`Opacity set to ${opacity}`);
            } else {
                printToConsole("Error: Opacity must be between 0 and 1");
            }
        }

        switch (cmd) {
            case "/help":
                printToConsole("Commands list:\n/help\n/addButton\n/removeButton\n/updateChangelog\n/viewChangelog\n/updateFutureMods\n/viewFutureMods\n/setopacity");
                return;


            case "/addbutton":
                handleAddButtonCommand(command);
                return;

            case "/removebutton":
                // Implement the removeButton functionality here
                return;

            case "/updatechangelog":
                // Implement the updateChangelog functionality here
                return;

            case "/viewchangelog":
                // Implement the viewChangelog functionality here
                return;

            case "/updatefuturemods":
                // Implement the updateFutureMods functionality here
                return;

            case "/viewfuturemods":
                // Implement the viewFutureMods functionality here
                return;

            case "/setopacity":
                setOpacity(args[0]);
                return;


            case "/reload":
                location.reload();
                return;

            case "/exit":
                document.querySelector('.command-prompt').style.display = 'none';
                return;

            default:
                printToConsole("Invalid command");
                break;
        }
    }


    const commandInput = document.querySelector("#command-input");

    commandInput.addEventListener("keydown", (event) => {
        if (event.code === "ArrowUp" || event.code === "ArrowDown") {
            event.preventDefault();
        }
    });

    commandInput.addEventListener("keydown", (event) => {
        if (event.code === "Enter") {
            processCommand(commandInput.value);
            commandHistory.push(commandInput.value);
            currentHistoryIndex = commandHistory.length;
            commandInput.value = "";
        }
    });


});

