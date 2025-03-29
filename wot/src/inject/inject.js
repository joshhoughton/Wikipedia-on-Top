(function moveFirstWikipediaResultToTop() {
  // Main container of all search results
  const mainContainer = document.querySelector("#rso");

  if (!mainContainer) {
    console.log("Main container (#rso) not found.");
    return;
  }

  // Try different selectors for search results
  const selectors = [".MjjYud", ".hlcw0c", ".g"];
  let searchResults = [];

  // Try each selector until we find results
  for (const selector of selectors) {
    searchResults = document.querySelectorAll(selector);
    if (searchResults.length > 0) {
      console.log(`Using selector: ${selector}`);
      break;
    }
  }

  if (searchResults.length === 0) {
    console.log("No search results found with any of the known selectors.");
    return;
  }

  let firstWikipediaResult = null;

  for (let result of searchResults) {
    const links = result.querySelectorAll("a");

    for (const link of links) {
      if (link.href && link.href.includes("wikipedia.org")) {
        firstWikipediaResult = result;
        break;
      }
    }

    if (firstWikipediaResult) break;
  }

  // If a Wikipedia result was found, move it to the top
  if (firstWikipediaResult) {
    mainContainer.prepend(firstWikipediaResult);
    console.log("Moved the first Wikipedia result to the top.");
  } else {
    console.log("No Wikipedia results found.");
  }
})();
