// Initialize the map
var mymap = L.map('map').setView([37.7749, -122.4194], 13);

// Add the base map layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(mymap);

// Add a marker for the chosen American landmark (Golden Gate Bridge in this example)
var marker = L.marker([37.8199, -122.4783]).addTo(mymap);
marker.bindPopup("<b>Golden Gate Bridge</b>").openPopup();
