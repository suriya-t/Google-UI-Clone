const searchInput = document.getElementsByClassName("google-search-input");
const searchButton = document.getElementsByClassName("search-button");

// Google Search the search term
function searchResults() {
  var url = `https://www.google.com/search?q=` + searchInput[0].value;

  window.open(url, "_self");
}

// Adding an event for the Input field to search when enter key is pressed
searchInput[0].addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    searchResults();
  }
});

// Adding an click event for the 'Google Search' button
searchButton[0].addEventListener("click", searchResults);
