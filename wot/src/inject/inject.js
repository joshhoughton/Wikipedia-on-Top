(function moveFirstWikipediaResultToTop() {
  // Main container of all search results
  const mainContainer = document.querySelector("#rso");

  const searchResults = document.querySelectorAll(".g");

  let firstWikipediaResult = null;

  for (let result of searchResults) {
    // URL of the search result
    const resultUrl = result.querySelector(".yuRUbf a")?.href;

    if (resultUrl && resultUrl.includes("wikipedia.org")) {
      firstWikipediaResult = result;
      break;
    }
  }

  // If a Wikipedia result was found, move it to the top
  if (firstWikipediaResult) {
    mainContainer.prepend(firstWikipediaResult);
    console.log("Moved the first Wikipedia result to the top.");
  } else {
    console.log("No Wikipedia results found.");
  }
})();
