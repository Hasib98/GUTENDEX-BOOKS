import { useState, useEffect } from "react";
import { defineURL } from "../utils/utils";
export default function Search({
  pageNumber,
  onsetPageNumber,
  onSetQuery,
  isWishlistButtonClicked,
}) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All categories");

  useEffect(() => {
    onsetPageNumber(1);
  }, [search, category, onsetPageNumber]);

  const url = defineURL(search, category, pageNumber);

  useEffect(() => {
    onSetQuery(url);
  }, [onSetQuery, url]);

  const categories = [
    "All categories",
    "Literature",
    "Fiction",
    "History",
    "Culture",
    "Mystery",
    "Geography",
    "Civilization",
    "Poetry",
  ];
  if (isWishlistButtonClicked)
    return (
      <div className="text-3xl font-nunito font-extrabold text-gray-900">
        My Wishlist 📃
      </div>
    );
  return (
    <div className="flex  focus:ring-2  focus:ring-slate-500">
      <input
        type="text"
        placeholder="Search books by 'Title or the 'Author' name"
        value={search}
        className="h-8 w-96 p-4  rounded-l-full focus:outline-none  border-yellow-400 border-2 font-nunito"
        onChange={(e) => setSearch(e.target.value)}
      />
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className=" font-bold focus:outline-none h-9 rounded-r-full border-yellow-400 border-2  font-nunito text-center justify-center"
      >
        {categories.map((cat, index) => (
          <option
            className=" bg-yellow-100 flex justify-center items-center p-2 font-nunito text-gray-700 hover:bg-yellow-300"
            key={index}
            value={cat}
          >
            {cat}
          </option>
        ))}
      </select>
    </div>
  );
}
