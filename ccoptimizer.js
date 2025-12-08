Game.registerMod('ccoptimizer', {
    init: function () {
        console.log("CCOptimizer loaded!");
        Game.Popup("CCOptimizer loaded!", Game.mouseX, Game.mouseY);

        let roiDiv = document.createElement('div');
            roiDiv.id = 'roiDisplay';
            roiDiv.style.position = 'absolute';
            roiDiv.style.top = '50px';
            roiDiv.style.right = '50px';
            roiDiv.style.backgroundColor = 'rgba(0,0,0,0.7)';
            roiDiv.style.color = 'white';
            roiDiv.style.padding = '10px';
            roiDiv.style.zIndex = 10000;
            document.body.appendChild(roiDiv);

            setInterval(() => {
                let buildingROI = [];
                for (let name in Game.Objects) {
                    let b = Game.Objects[name];
                    let price = b.getPrice();
                    let dCPS = b.storedCps || b.cps();
                    buildingROI.push({name, ROI: price/dCPS, price, dCPS});
                }
            let allROI = buildingROI.concat(upgradeROI);
            allROI.sort((a,b) => a.ROI - b.ROI);

            let html = '<b>Next Best Purchases:</b><br>';
            allROI.slice(0,10).forEach(p => {
                html += `${p.name}: ROI ≈ ${p.ROI.toFixed(1)} sec<br>`;
            });
            roiDiv.innerHTML = html;
        }, 1000);
    },
    save: function(){ return ""; },
    load: function(str){}
});