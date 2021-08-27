$("div#search > div > div > div")
    .filter((i, el) => el.outerHTML.includes("wikipedia."))
    .each((i, el) => {
        if (i === 0) {
            $(el).insertBefore($("div#search > div > div > div").first())
        }
    })