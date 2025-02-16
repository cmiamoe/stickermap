// this shouldn't be loaded
map.on('moveend', function() {
    const bounds = map.getBounds();

    const bottomLeft = bounds.getSouthWest();

    const topRight = bounds.getNorthEast();

    console.log("Bottom left coordinates: ", bottomLeft);
    console.log("Top right coordinates: ", topRight);
});