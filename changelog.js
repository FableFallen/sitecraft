const changelogData = [
    {
        version: "1.0",
        changes: [
            {
                title: "Plant Everything",
                description: "This feature allows you to plant all types of crops in your farm.",
            },
            {
                title: "Auto Feed",
                description: "This feature automatically feeds your animals so you don't have to manually do it.",
            },
            {
                title: "Multi Craft",
                description: "This feature allows you to craft multiple items at once.",
            },
            {
                title: "Fascinating Carry Weight",
                description: "This feature increases your carrying capacity.",
            },
            {
                title: "Mass Farming",
                description: "This feature allows you to farm a large amount of crops at once.",
            },
            {
                title: "Automatic Fuel",
                description: "This feature automatically refuels your items so you don't have to manually do it.",
            },
            {
                title: "Toggle Movement",
                description: "This feature allows you to toggle movement for certain activities.",
            },
            {
                title: "Multi User Chest",
                description: "This feature allows multiple users to access a single chest.",
            },
            {
                title: "Craft from Containers",
                description: "This feature allows you to craft items directly from containers.",
            },
            {
                title: "Odin Banners",
                description: "This feature allows you to decorate with Odin-themed banners.",
            },
            {
                title: "Viking Sails",
                description: "This feature allows you to decorate with Viking-themed sails.",
            },
            {
                title: "Comfy Signs",
                description: "This feature allows you to place signs around your base.",
            },
            {
                title: "Simple Auto Sort",
                description: "This feature allows you to automatically sort your items.",
            },
            {
                title: "Quick Stack Store Trash Restock",
                description: "This feature allows you to quickly store, stack, trash, and restock your items.",
            },
            {
                title: "Adventure Backpacks",
                description: "This feature allows you to carry more items with specialized backpacks.",
            },
            {
                title: "Odin Campsite",
                description: "This feature allows you to place an Odin-themed campsite.",
            },
            {
                title: "Recycle",
                description: "This feature allows you to recycle items.",
            },
            {
                title: "Use Equipment In Water",
                description: "This feature allows you to use equipment while in water.",
            },
            {
                title: "Floating Items",
                description: "This feature allows you to collect floating items.",
            }
            // Add more changelog objects here
        ],
    },
];

document.addEventListener("DOMContentLoaded", () => {
    const changelog = document.querySelector(".changelog");
    changelogData.forEach((entry) => {
        const h2 = document.createElement("h2");
        h2.textContent = `Version ${entry.version}`;
        changelog.appendChild(h2);

        const ul = document.createElement("ul");
        entry.changes.forEach((change) => {
            const li = document.createElement("li");
            li.textContent = `- ${change.title}`;

            const tooltip = document.createElement("span");
            tooltip.classList.add("tooltip");
            tooltip.textContent = change.description;
            li.appendChild(tooltip);

            ul.appendChild(li);
        });

        changelog.appendChild(ul);
    });
});
