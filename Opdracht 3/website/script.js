// Leaflet map code
function initLeafletMap() {
    const mymap = L.map('map').setView([37.7749, -122.4194], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(mymap);

    const marker = L.marker([37.8199, -122.4783]).addTo(mymap);
    marker.bindPopup("<b>Golden Gate Bridge</b>").openPopup();
}

// OMDb API call code
function fetchMovieDetails() {
    const apiKey = 'a59cbeb2';
    const apiUrl = `https://www.omdbapi.com/?apikey=${apiKey}&t=Avengers`; // Using a specific movie title for testing

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Process the API response and update the webpage
            console.log(data);

            // Example: Display movie details on the cinema page
            const cinemaPage = document.getElementById('cinema-page');
            cinemaPage.innerHTML = `<h2>${data.Title}</h2>
                                    <p>Release Date: ${data.Released}</p>
                                    <p>Director: ${data.Director}</p>
                                    <p>Actors: ${data.Actors}</p>`;
        })
        .catch(error => console.error('Error fetching data:', error));
}

// Check the current page and execute relevant code
document.addEventListener('DOMContentLoaded', function () {
    const currentPage = window.location.pathname;

    if (currentPage.includes('geography.html')) {
        // Execute Leaflet map code on the geography page
        initLeafletMap();
    } else if (currentPage.includes('cinema.html')) {
        // Execute OMDb API call code on the cinema page
        fetchMovieDetails();
    }
});
