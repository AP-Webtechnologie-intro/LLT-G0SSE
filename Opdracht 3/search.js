// search.js

// Function to handle search
function handleSearch() {
    // Get the search input value
    var searchTerm = document.getElementById('searchInput').value.toLowerCase();

    // Define the available topics and their corresponding pages
    var topics = {
        'geography': 'geography.html',
        'cinema': 'cinema.html',
        'history': 'history.html',
        'literature': 'literature.html',
        'music': 'music.html',
        'politics': 'politics.html',
        'contact': 'contact.html'
        // Add more topics as needed
    };

    // Check if the search term matches any topic
    if (topics.hasOwnProperty(searchTerm)) {
        // Redirect to the corresponding page
        window.location.href = topics[searchTerm];
    } else {
        // Display a message if the topic is not found
        alert('Topic not found. Please try another search term.');
    }
}

// Event listener for the DOMContentLoaded event
document.addEventListener('DOMContentLoaded', function () {
    // Event listener for the search button
    var searchButton = document.getElementById('searchButton');
    if (searchButton) {
        searchButton.addEventListener('click', handleSearch);
    } else {
        console.error('searchButton not found.');
    }
});
