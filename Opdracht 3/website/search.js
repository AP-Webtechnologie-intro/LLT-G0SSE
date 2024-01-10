// script.js

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
        'politics': 'politics.html'
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

// Event listener for the search button
document.getElementById('searchButton').addEventListener('click', handleSearch);
