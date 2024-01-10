// politics.js
function initMap() {
    var map = L.map('politics-map').setView([38.8977, -77.0365], 15);

    // Add the OpenStreetMap base layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Add a marker for the White House
    var marker = L.marker([38.8977, -77.0365]).addTo(map);
    marker.bindPopup("<b>The White House</b>").openPopup();
}

// Call the initMap function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    initMap();
});
