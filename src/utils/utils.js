export function defineURL(search, category) {
  if (!search && category === "All categories") {
    return `https://gutendex.com/books`;
  } else if (!search && category !== "All categories") {
    return `https://gutendex.com/books?topic=${category}`;
  } else if (search && category === "All categories") {
    return `https://gutendex.com/books?search=${encodeURI(search)}`;
  } else if (search && category !== "All categories") {
    return `https://gutendex.com/books?search=${encodeURI(
      search
    )}&topic=${category}`;
  }
}

export function cleaningGenreData(data) {
  return Array.from(
    new Set(
      data.flatMap((item) => {
        // Check if the item is relevant
        if (item.startsWith("Browsing:")) {
          return item.split("Browsing: ")[1].split("/"); // Split by '/' after removing "Browsing: "
        } else if (item.includes("-")) {
          return item.split("-").map((part) => part.trim()); // Split by '-' and trim whitespace
        } else {
          return []; // Return an empty array for non-relevant items
        }
      })
    )
  )
    .filter((item) => /^[^\d]+$/.test(item))
    .join(", "); // Filter out items that
}
