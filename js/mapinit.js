var map = L.map('map', { attributionControl: false, minZoom: 6, zoomControl: false }).setView([47.184, 19.509], 8);

L.control.zoom({ position: 'topleft', zoomInText: '<div class="navy-button"><img src="/icons/plus.svg"></div>', zoomOutText: '<div class="navy-button"><img src="/icons/minus.svg"></div>' }).addTo(map);
L.control.attribution({ position: 'bottomright', prefix: false }).addAttribution(`
<div id="attributionelement"></div>
`).addTo(map);

Standard.addTo(map);
stickerMarkers.addTo(map);
partialStickerMarkers.addTo(map);

L.control.layers(baseLayers, overlayLayers, { position: 'bottomleft' }).addTo(map);

map.on('baselayerchange', function(eventLayer) {
    window.fireStyleChangeEvent();
    if (eventLayer.name === 'Mapnik (Alapértelmezett)') {
        document.getElementById('attributionelement').innerHTML = StandardAtt;
    } else if (eventLayer.name === 'OSM Francia Stílus') {
        document.getElementById('attributionelement').innerHTML = FranceStyleAtt;
    } else if (eventLayer.name === 'Humanitárius') {
        document.getElementById('attributionelement').innerHTML = HumanitarianAtt;
    }
})

try {
    L.control.locate({ setView: false }).addTo(map);
} catch {
    console.warn('Location module is not available.');
}

window.fireStyleChangeEvent();