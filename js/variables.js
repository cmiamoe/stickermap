const Standard = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '<br>&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});
const FranceStyle = L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
    attribution: '<br>&copy; <a href="https://openstreetmap.fr/">OpenStreetMap France</a>,<br>&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});
const Humanitarian = L.tileLayer('https://tile-{s}.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
    attribution: '<br>&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors,<br>Tiles style by <a href="https://www.hotosm.org/">Humanitarian OSM Team</a>,<br>hosted by <a href="https://openstreetmap.fr/">OpenStreetMap France</a>'
});
var baseLayers = {
    "Mapnik (Alapértelmezett)": Standard,
    "OSM Francia Stílus": FranceStyle,
    "Humanitárius": Humanitarian
};

var stickerMarkers = L.layerGroup();
const stickerIcon = L.icon({
    iconUrl: '/pictures/filc.png',
    iconSize: [41, 41],
    iconAnchor: [0, 41],
    popupAnchor: [34, -34],
    shadowUrl: '/pictures/placeholder.png',
    shadowSize: [0, 0],
    shadowAnchor: [0, 0]
})
var partialStickerMarkers = L.layerGroup();
const partialIcon = L.icon({
    iconUrl: '/pictures/filcMono.png',
    iconSize: [41, 41],
    iconAnchor: [0, 41],
    popupAnchor: [34, -34],
    shadowUrl: '/pictures/placeholder.png',
    shadowSize: [0, 0],
    shadowAnchor: [0, 0]
})
var overlayLayers = {
    "Matricák": stickerMarkers,
    "Dokumentálatlan Matricák": partialStickerMarkers
};