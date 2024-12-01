function fireStyleChangeEvent() {
    var baseLayers = document.querySelectorAll('.leaflet-control-layers-base label');

    baseLayers.forEach(function (element) {
        element.classList.remove('selectedbaselayerstyle');
        element.classList.add('baselayerstyle');
    });

    var selectedBaseLayerInput = document.querySelector('input.leaflet-control-layers-selector:checked');
    if (selectedBaseLayerInput) {
        var parentSpan = selectedBaseLayerInput.parentElement.parentElement;
        parentSpan.classList.remove('baselayerstyle')
        parentSpan.classList.add('selectedbaselayerstyle');
    }
}
window.fireStyleChangeEvent = fireStyleChangeEvent;