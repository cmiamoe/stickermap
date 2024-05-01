fetch('/data.json')
    .then(response => response.json())
    .then(data => {
        data.forEach(item => {
            console.log("Found entry: " + item.popup.address)
            var markerIcon = (item.type === "complete" || item.type === "communityfound") ? stickerIcon : partialIcon;
            var MarkerGroup = item.type === "complete" ? stickerMarkers : partialStickerMarkers;
            var extrainfo = (item.type === "complete" || item.type === "communityfound") ? "" : '<a href="https://forms.gle/gCpWT2j4qARYVCz58">Az információ hiányos, ha megtalálod, jelezd!</a>';
            var finderinfo = item.type === "communityfound" ? `<p>Kiegészítette, ${item.finder}.</p>` : "";
            var marker = L.marker([item.z, item.x], { icon: markerIcon })
                .bindPopup(`
                <h3>${item.popup.title}</h3>
                <p>${item.popup.address}</p>
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
                    <img class="pending" src="${item.popup.image}" width="100%" onload="document.getElementById('${item.popup.image}').style.display ='none';this.classList.remove('pending');">
                </div>
                ${extrainfo}
                ${finderinfo}
            `);
            MarkerGroup.addLayer(marker);
        });
    });