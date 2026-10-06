// Issue 2: Earth repeating itself when zoomed out
// Solved by using noWrap: true
const map = L.map('map', {
    maxBounds: [[-90, -180], [90, 180]], // Restrict bounds
    maxBoundsViscosity: 1.0
}).setView([39, 35], 4);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors',
    noWrap: true, // Prevents horizontal repetition
    minZoom: 2
}).addTo(map);

// Issue 1: Zoom threshold for markers
const markersData = [
    [39.9334, 32.8597], // Ankara
    [41.0082, 28.9784], // Istanbul
    [38.4237, 27.1428]  // Izmir
];

const markerLayer = L.layerGroup();

markersData.forEach(coords => {
    L.circleMarker(coords, {
        radius: 8,
        fillColor: "#ff7800",
        color: "#000",
        weight: 1,
        opacity: 1,
        fillOpacity: 0.8
    }).addTo(markerLayer);
});

// Logic to show/hide markers based on zoom level
function updateMarkers() {
    if (map.getZoom() >= 6) {
        if (!map.hasLayer(markerLayer)) {
            map.addLayer(markerLayer);
        }
    } else {
        if (map.hasLayer(markerLayer)) {
            map.removeLayer(markerLayer);
        }
    }
}

// Attach event listener to zoomend
map.on('zoomend', updateMarkers);

// Initial check
updateMarkers();
