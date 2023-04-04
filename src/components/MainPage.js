import React from 'react';
import '../css/styles.css';
import ModCarousel from './ModCarousel';

function MainPage() {
    const modsData = [
        {
            title: "Plant Everything",
            url: "https://www.nexusmods.com/valheim/mods/1042",
            description: "This feature allows you to plant all types of crops in your farm."
        },
        {
            title: "Auto Feed",
            url: "https://www.nexusmods.com/valheim/mods/985",
            description: "This feature automatically feeds your animals so you don't have to manually do it."
        },
        {
            title: "Multi Craft",
            url: "https://www.nexusmods.com/valheim/mods/263?tab=files",
            description: "This feature allows you to craft multiple items at once."
        },
        {
            title: "Fascinating Carry Weight",
            description: "This feature increases your carrying capacity."
        },
        {
            title: "Mass Farming",
            url: "https://valheim.thunderstore.io/package/k942/MassFarming/",
            description: "This feature allows you to farm a large amount of crops at once."
        },
        {
            title: "Automatic Fuel",
            url: "https://valheim.thunderstore.io/package/TastyChickenLegs/AutomaticFuel/",
            description: "This feature automatically refuels your items so you don't have to manually do it."
        },
        {
            title: "Toggle Movement",
            url: "https://valheim.thunderstore.io/package/GetOffMyLawn/ToggleMovementMod/",
            description: "This feature allows you to toggle movement for certain activities."
        },
        {
            title: "Multi User Chest",
            url: "https://valheim.thunderstore.io/package/MSchmoecker/MultiUserChest/",
            description: "This feature allows multiple users to access a single chest."
        },
        {
            title: "Craft from Containers",
            url: "https://valheim.thunderstore.io/package/DrZed/CraftFromContainers/",
            description: "This feature allows you to craft items directly from containers."
        },
        {
            title: "Odin Banners",
            url: "https://valheim.thunderstore.io/package/OdinPlus/OdinBanners/",
            description: "This feature allows you to decorate with Odin-themed banners."
        },
        {
            title: "Viking Sails",
            url: "https://valheim.thunderstore.io/package/Azumatt/VikingSails/",
            description: "This feature allows you to decorate with Viking-themed sails."
        },
        {
            title: "Comfy Signs",
            url: "https://valheim.thunderstore.io/package/ComfyMods/ComfySigns/",
            description: "This feature allows you to place signs around your base."
        },
        {
            title: "Simple Auto Sort",
            url: "https://valheim.thunderstore.io/package/DaddelBude/ValheimSimpleAutoSort/",
            description: "This feature allows you to automatically sort your items."
        },
        {
            title: "Quick Stack Store Trash Restock",
            url: "https://valheim.thunderstore.io/package/Goldenrevolver/Quick_Stack_Store_Sort_Trash_Restock/",
            description: "This feature allows you to quickly store, stack, trash, and restock your items."
        },
        {
            title: "Adventure Backpacks",
            url: "https://valheim.thunderstore.io/package/Vapok/AdventureBackpacks/",
            description: "This feature allows you to carry more items with specialized backpacks."
        },
        {
            title: "Odin Campsite",
            url: "https://valheim.thunderstore.io/package/OdinPlus/OdinCampsite/",
            description: "This feature allows you to place an Odin-themed campsite."
        },
        {
            title: "Recycle",
            url: "https://valheim.thunderstore.io/package/nexusreupload/Ivaylo_Lafchiev_Deathwalkx_ValheimRecycle/",
            description: "This feature allows you to recycle items."
        },
        {
            title: "Use Equipment In Water",
            url: "https://valheim.thunderstore.io/package/LVH-IT/UseEquipmentInWater/",
            description: "This feature allows you to use equipment while in water."
        },
        {
            title: "Floating Items",
            url: "https://valheim.thunderstore.io/package/VentureValheim/Venture_Floating_Items/",
            description: "This feature allows you to collect floating items."
        }


        // ...
        // Add the rest of the mods here
        // ...
    ];
    
    return (
        <div>
            {/* ... */}
            {/* Add the ModCarousel component with the modsData prop */}
            <div className="mod-carousel">
                <ModCarousel mods={modsData} />
            </div>
            {/* ... */}
        </div>
    );
}

export default MainPage;
