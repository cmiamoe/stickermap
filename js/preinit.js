function fireStyleChangeEvent() {
    const baseLayers = document.querySelectorAll('.leaflet-control-layers-base label');

    baseLayers.forEach(function (element) {
        element.classList.remove('selectedbaselayerstyle');
        element.classList.add('baselayerstyle');
    });

    const selectedBaseLayerInput = document.querySelector('input.leaflet-control-layers-selector:checked');
    if (selectedBaseLayerInput) {
        const parentSpan = selectedBaseLayerInput.parentElement.parentElement;
        parentSpan.classList.remove('baselayerstyle')
        parentSpan.classList.add('selectedbaselayerstyle');
    }
}
window.fireStyleChangeEvent = fireStyleChangeEvent;