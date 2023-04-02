const buttons = [
    {
        title: "Plant Everything",
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
    },
    {
        title: "Floating Item but better items ngl",
        url: "https://valheim.thunderstore.io/package/LVH-IT/UseEquipmentInWater/",
    }

    // Add more button objects here
];

document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".container");
    buttons.forEach((button) => {
        const btn = document.createElement("button");
        btn.classList.add("mod-button");
        btn.textContent = button.title;
        btn.onclick = () => window.open(button.url);
        container.appendChild(btn);
    });




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
            const commandPrompt = document.querySelector(".command-prompt");
            commandPrompt.style.display = "block";
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






    function processCommand(command) {
        const [action, title, url] = command.split(",");

        if (action === "addButton") {
            const newButton = {
                title: title.trim(),
                url: url.trim(),
            };

            buttons.push(newButton);

            const btn = document.createElement("button");
            btn.classList.add("mod-button");
            btn.textContent = newButton.title;
            btn.onclick = () => window.open(newButton.url);
            container.appendChild(btn);
        } else {
            alert("Invalid command");
        }
    }

    const commandInput = document.querySelector("#command-input");
    commandInput.addEventListener("keydown", (event) => {
        if (event.code === "Enter") {
            processCommand(commandInput.value);
            commandInput.value = "";
        }
    });
});




