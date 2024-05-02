var element = document.querySelector('.leaflet-control-layers-list');
element.insertAdjacentHTML('afterbegin', '<h1 class="settingsheader">Beállítások</h1>');

var baseLayers = document.querySelectorAll('.leaflet-control-layers-base label');
var overlays = document.querySelectorAll('.leaflet-control-layers-overlays label');

baseLayers.forEach(function (element) {
  element.classList.add('baselayerstyle');
});

window.onload = function () {
    var nohide = document.querySelector('.leaflet-control-layers.leaflet-control');
    nohide.classList.add('leaflet-control-layers-expanded');
}
