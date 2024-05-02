const Standard = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
const StandardAtt = '<br>&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'

const FranceStyle = L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png');
const FranceStyleAtt = '<br>&copy; <a href="https://openstreetmap.fr/">OpenStreetMap France</a>,<br>&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'

const Humanitarian = L.tileLayer('https://tile-{s}.openstreetmap.fr/hot/{z}/{x}/{y}.png');
const HumanitarianAtt = '<br>&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors,<br>Tiles style by <a href="https://www.hotosm.org/">Humanitarian OSM Team</a>,<br>hosted by <a href="https://openstreetmap.fr/">OpenStreetMap France</a>'

var baseLayers = {
    "Mapnik (Alapértelmezett)": Standard,
    "OSM Francia Stílus": FranceStyle,
    "Humanitárius": Humanitarian
};

var stickerMarkers = L.layerGroup();
const stickerIcon = L.icon({
    iconUrl: '/icons/sticker.svg',
    iconSize: [40, 40],
    iconAnchor: [0, 40],
    popupAnchor: [20, -20],
    shadowUrl: '/icons/placeholder.png',
    shadowSize: [0, 0],
    shadowAnchor: [0, 0]
})

var partialStickerMarkers = L.layerGroup();
const partialIcon = L.icon({
    iconUrl: '/icons/stickermono.svg',
    iconSize: [40, 40],
    iconAnchor: [0, 40],
    popupAnchor: [20, -20],
    shadowUrl: '/icons/placeholder.png',
    shadowSize: [0, 0],
    shadowAnchor: [0, 0]
})

var overlayLayers = {
    "Matricák": stickerMarkers,
    "Dokumentálatlan Matricák": partialStickerMarkers
};