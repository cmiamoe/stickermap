const element = document.querySelector('.leaflet-control-layers-list');
element.insertAdjacentHTML('afterbegin', '<h1 class="settingsheader">Beállítások</h1>');

const baseLayers2 = document.querySelectorAll('.leaflet-control-layers-base label');
const overlays = document.querySelectorAll('.leaflet-control-layers-overlays label');

const overlay1 = document.querySelector('.leaflet-control-layers-overlays label:nth-child(1)');
overlay1.classList.add('matrica');
document.querySelector('.matrica').classList.add('matricaon');
const overlay2 = document.querySelector('.leaflet-control-layers-overlays label:nth-child(2)');
overlay2.classList.add('nomatr');
document.querySelector('.nomatr').classList.add('nomatron');

function toggleSticker(stickerClosed, stickerExpanded) {
  let sticclos = document.getElementById(stickerClosed);
  let sticcexp = document.getElementById(stickerExpanded);
  sticclos.style.display = (sticclos.style.display === 'none') ? 'block' : 'none';
  sticcexp.style.display = (sticcexp.style.display === 'none') ? 'block' : 'none';
}

baseLayers2.forEach(function (element) {
  element.classList.add('baselayerstyle');
});

overlays.forEach(function (element) {
  element.classList.add('overlaystyle');
});

const sep = document.querySelector('.leaflet-control-layers-separator');
sep.remove();

window.toggleSticker = toggleSticker;