Game.registerMod('ccoptimizer', {
    init: function () {
        console.log("CCOptimizer loaded!");
        Game.Popup("CCOptimizer loaded!", Game.mouseX, Game.mouseY);
    },

    save: function () { return JSON.stringify({}); },

    load: function (str) {}
});