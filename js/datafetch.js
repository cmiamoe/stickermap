fetch('/data/data.json')
    .then(response => response.json())
    .then(data => {
        var entries = 0;
        data.forEach(item => {
            entries++;
            const markerIcon = (item.type === "complete" || item.type === "communityfound") ? stickerIcon : partialIcon;
            const MarkerGroup = item.type === "complete" ? stickerMarkers : partialStickerMarkers;
            const finderinfo = item.type === "communityfound" ? `<p class="communityfound">Készítette, ${item.finder}.</p>` : "";
            let popupData = (item.type === "complete" || item.type === "communityfound") ? `
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
                <img class="pending popupimg" src="${item.popup.image}" width="100%" onload="document.getElementById('${item.popup.image}').remove();this.classList.remove('pending');">
            </div>
            ${finderinfo}` : `
            <div>
                <h3>${item.popup.title}</h3>
                <p class="popupdesc">${item.popup.address}</p>
                <div class="missingdata">
                    <img src="/icons/sad.svg">
                    <p class="missinginfo">Ez a matrica nincs dokumentálva,<br>
                    ha megtaláltad, <a class="missinginfo" href="https://forms.gle/gCpWT2j4qARYVCz58">jelezd</a>!</p>
                </div>
            </div>
            `;

            var marker = L.marker([item.z, item.x], { icon: markerIcon })
                .bindPopup(popupData);
            MarkerGroup.addLayer(marker);
        });
        console.info(`Found ${entries} entries.`)
        console.info('Hint for the last one: go up')
        console.log('%cDe tE MiT KeReSgÉlSz??? Menj inkább reFilc contributornak, jobb elfoglaltság meglásd. https://github.com/refilc/naplo', 'color: white; font-size: 50px; font-family: sans-serif;')
        document.getElementById('stickernumber').innerText = entries;
    });