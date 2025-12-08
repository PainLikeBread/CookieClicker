Game.registerMod("MyMod", {
    init: function () {
        console.log("MyMod loaded!");
        Game.Popup("MyMod loaded!", Game.mouseX, Game.mouseY);
    },

    save: function () {
        return JSON.stringify({});
    },

    load: function (str) {
        // Runs when loading a save – not needed for basic mods
    }
});