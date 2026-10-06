// Issue 2: Earth repeating itself when zoomed out
// Solved by setting wrapX: false on the tile layer source
const tileLayer = new ol.layer.Tile({
    source: new ol.source.OSM({
        wrapX: false // Prevents the map from repeating horizontally
    })
});

const map = new ol.Map({
    target: 'map',
    layers: [tileLayer],
    view: new ol.View({
        center: ol.proj.fromLonLat([35, 39]), // Center of Turkey
        zoom: 4,
        minZoom: 2 // Restrict zoom out to prevent seeing multiple earths anyway
    })
});

// Issue 1: Zoom threshold for markers
// Create some dummy markers
const markers = [
    [32.8597, 39.9334], // Ankara
    [28.9784, 41.0082], // Istanbul
    [27.1428, 38.4237]  // Izmir
];

const features = markers.map(coords => {
    return new ol.Feature({
        geometry: new ol.geom.Point(ol.proj.fromLonLat(coords))
    });
});

const vectorSource = new ol.source.Vector({
    features: features
});

const vectorLayer = new ol.layer.Vector({
    source: vectorSource,
    style: new ol.style.Style({
        image: new ol.style.Circle({
            radius: 8,
            fill: new ol.style.Fill({color: 'red'}),
            stroke: new ol.style.Stroke({color: 'white', width: 2})
        })
    }),
    // Solved: Set a zoom threshold so markers only appear when zoom >= 6
    minZoom: 6 
});

map.addLayer(vectorLayer);
