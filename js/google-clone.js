const searchInput = document.getElementsByClassName("google-search-input");

/* Adding an event for the Input field to search when enter key is pressed*/
searchInput[0].addEventListener("keydown", function(event){
  if (event.key === "Enter") {
    event.preventDefault();
    searchResults();
  }
});

function searchResults()
{
  let url = "http://www.google.com/search?q=" + searchInput[0].value;

  window.open(url, "_self");
}
