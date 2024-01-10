// contact.js

// Initialize the Leaflet map
function initMap() {
    var map = L.map('map').setView([51.2279, 4.4356], 13);

    // Add the OpenStreetMap base layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Add a marker for Park Spoor Noord
    var marker = L.marker([51.2279, 4.4356]).addTo(map);
    marker.bindPopup("<b>Park Spoor Noord, Antwerp</b>").openPopup();
}

// Call the initMap function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    initMap();
});
