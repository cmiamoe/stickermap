const Standard = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19
});
const StandardAtt = `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors`

const FranceStyle = L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png');
const FranceStyleAtt = `&copy; <a href="https://openstreetmap.fr/">OpenStreetMap France</a>,
                        <br>&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors`

const AlidadeDark = L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png', {
    mazZoom: 20
});
const AlidadeDarkAtt = `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors,
                        <br>&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a>,
                        <br>&copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a>`

const AlidadeLight = L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png', {
    maxZoom: 20
});
const AlidadeLightAtt = `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors,
                        <br>&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a>,
                        <br>&copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a>`

var baseLayers = {
    "Mapnik (Alapértelmezett)": Standard,
    "Alidade Sötét": AlidadeDark,
    "Alidade Világos": AlidadeLight,
    "OSM Francia Stílus": FranceStyle
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