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
