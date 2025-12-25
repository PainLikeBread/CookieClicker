Game.registerMod("ROIHelper", {
    init: function() {
        console.log("ROIHelper loaded!");
        Game.Popup("ROIHelper loaded!", Game.mouseX, Game.mouseY);

        // Create floating ROI display
        let roiDiv = document.createElement('div');
        roiDiv.id = 'roiDisplay';
        roiDiv.style.position = 'absolute';
        roiDiv.style.bottom = '50px';
        roiDiv.style.left = '100px';
        roiDiv.style.backgroundColor = 'rgba(0,0,0,0.7)';
        roiDiv.style.color = 'white';
        roiDiv.style.padding = '10px';
        roiDiv.style.zIndex = 10000;
        document.body.appendChild(roiDiv);

        // Update ROI every second
        setInterval(() => {
            let buildingROI = [];
            // Calculate ROI for buildings
            for (let name in Game.Objects) {
                let b = Game.Objects[name];
                let price = b.getPrice();
                let dCPS = b.storedCps || b.cps();
                buildingROI.push({name, ROI: price/dCPS, price, dCPS});
            }

            // Combine buildings and upgrades
            let allROI = buildingROI
            // Sort by ROI (lowest payback time first)
            allROI.sort((a,b) => a.ROI - b.ROI);

            // Display top 10 purchases
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