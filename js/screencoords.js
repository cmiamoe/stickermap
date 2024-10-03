// purely for testing, not included in prod
map.on('moveend', function() {
    var bounds = map.getBounds();

    var bottomLeft = bounds.getSouthWest();

    var topRight = bounds.getNorthEast();

    console.log("Bottom left coordinates: ", bottomLeft);
    console.log("Top right coordinates: ", topRight);
});