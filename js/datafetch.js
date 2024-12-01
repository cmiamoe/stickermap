async function fetchAndProcessData() {
    try {
        const response = await fetch('/data/data.json');
        const data = await response.json();
        
        const stickerStyles = {
            'qr': '/data/styles/qr.webp',
            'nothanks': '/data/styles/nothanks.webp',
            'nothanks2': '/data/styles/nothanks2.webp'
        };

        const processedEntries = data.map(item => {
            const isCompleteOrCommunityFound = 
                item.type === "complete" || item.type === "communityfound";
            
            const markerIcon = isCompleteOrCommunityFound ? stickerIcon : partialIcon;
            const markerGroup = isCompleteOrCommunityFound 
                ? stickerMarkers 
                : partialStickerMarkers;
            
            const finderInfo = item.type === "communityfound" 
                ? `<p class="communityfound">Készítette, ${item.finder}.</p>` 
                : "";
            
            const stickerStyle = stickerStyles[item.style] || '';

            const popupData = generatePopupContent(
                item, 
                isCompleteOrCommunityFound, 
                stickerStyle, 
                finderInfo
            );

            const marker = L.marker([item.z, item.x], { icon: markerIcon })
                .bindPopup(popupData);
            
            markerGroup.addLayer(marker);
            
            return item;
        });

        document.getElementById('stickernumber').innerText = processedEntries.length;
        
        console.log('%cDe tE MiT KeReSgÉlSz??? Menj inkább reFilc contributornak, jobb elfoglaltság meglásd. https://github.com/refilc/naplo', 
            'color: white; font-size: 50px; font-family: sans-serif;'
        );
    } catch (error) {
        console.error('Error fetching or processing data:', error);
    }
}

function generatePopupContent(item, isCompleteOrCommunityFound, stickerStyle, finderInfo) {
    if (isCompleteOrCommunityFound) {
        return `
        <div>
            <h3>${item.popup.title}</h3>
            <p class="popupdesc">${item.popup.address}</p>
        </div>
        <div class="image-container">
            <div id="${item.popup.image}" class="spinner center">
                ${generateSpinnerBlades()}
            </div>
            <div id="stickerclosed_${item.popup.image}" class="sticker-container" style="display: block;">
                <img class="pending popupimg" src="${item.popup.image}" width="100%" 
                     onload="document.getElementById('${item.popup.image}').remove();this.classList.remove('pending');">
                <img class="small-stickerimg" src="${stickerStyle}" width="15%" 
                     onclick="window.toggleSticker('stickerclosed_${item.popup.image}', 'stickerexpanded_${item.popup.image}')">
            </div>
            <div id="stickerexpanded_${item.popup.image}" class="sticker-container" style="display: none;">
                <img class="popupimg" src="${stickerStyle}" width="100%">
                <img class="small-stickerimg" src="${item.popup.image}" width="15%" 
                     onclick="window.toggleSticker('stickerclosed_${item.popup.image}', 'stickerexpanded_${item.popup.image}')">
            </div>
        </div>
        ${finderInfo}`;
    }

    return `
    <div>
        <h3>${item.popup.title}</h3>
        <p class="popupdesc">${item.popup.address}</p>
        <div class="missingdata">
            <img src="/icons/sad.svg">
            <p class="missinginfo">Ez a matrica nincs dokumentálva,<br>
            ha megtaláltad, <a class="missinginfo" href="#" 
            onclick="editwarning.style.display = 'block';overlay.style.display = 'block';event.stopPropagation();">jelezd</a>!</p>
        </div>
    </div>`;
}

function generateSpinnerBlades() {
    return Array(12).fill('<div class="spinner-blade"></div>').join('');
}

// Call the function
fetchAndProcessData();