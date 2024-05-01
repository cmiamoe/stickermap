var map = L.map('map', { attributionControl: false, minZoom: 6, zoomControl: false }).setView([47.184, 19.509], 8);

L.control.zoom({ position: 'topleft', zoomInText: '<div class="navy-button"><img src="/icons/plus.svg"></div>', zoomOutText: '<div class="navy-button"><img src="/icons/minus.svg"></div>' }).addTo(map);
L.control.locate({ setView: false }).addTo(map);

L.control.attribution({ position: 'bottomright', prefix: false }).addAttribution(`
<a href="https://refilc.hu">reFilc</a> Matricatérkép
`).addTo(map);

Standard.addTo(map);
stickerMarkers.addTo(map);
partialStickerMarkers.addTo(map);

L.control.layers(baseLayers, overlayLayers, { position: 'bottomleft' }).addTo(map);