fetch('/data/data.json')
    .then(response => response.json())
    .then(data => {
        var entries = 0;
        data.forEach(item => {
            entries++;
            var markerIcon = (item.type === "complete" || item.type === "communityfound") ? stickerIcon : partialIcon;
            var MarkerGroup = item.type === "complete" ? stickerMarkers : partialStickerMarkers;
            var extrainfo = (item.type === "complete" || item.type === "communityfound") ? "" : '<a class="missinginfo" href="https://forms.gle/gCpWT2j4qARYVCz58">Az információ hiányos, ha megtalálod, jelezd!</a>';
            var finderinfo = item.type === "communityfound" ? `<p class="communityfound">Kiegészítette, ${item.finder}.</p>` : "";
            var marker = L.marker([item.z, item.x], { icon: markerIcon })
                .bindPopup(`
                <div>
                    <h3>${item.popup.title}</h3>
                    <p class="popupdesc">${item.popup.address}</p>
                </div>
                <div class="image-container">
                    <div id="${item.popup.image}" class="spinner center">
                        <div class="spinner-blade"></div>
                        <div class="spinner-blade"></div>
                        <div class="spinner-blade"></div>
                        <div class="spinner-blade"></div>
                        <div class="spinner-blade"></div>
                        <div class="spinner-blade"></div>
                        <div class="spinner-blade"></div>
                        <div class="spinner-blade"></div>
                        <div class="spinner-blade"></div>
                        <div class="spinner-blade"></div>
                        <div class="spinner-blade"></div>
                        <div class="spinner-blade"></div>
                    </div>
                    <img class="pending popupimg" src="${item.popup.image}" width="100%" onload="document.getElementById('${item.popup.image}').style.display ='none';this.classList.remove('pending');">
                </div>
                ${extrainfo}
                ${finderinfo}
            `);
            MarkerGroup.addLayer(marker);
        });
        console.log(`Found ${entries} entries.`);
    });