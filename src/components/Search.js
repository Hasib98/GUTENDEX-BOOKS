import { useState, useEffect } from "react";
import { defineURL } from "../utils/utils";
export default function Search({
  pageNumber,
  onsetPageNumber,
  onSetQuery,
  isWishlistButtonClicked,
  isHomeBtnClicked,
  onHomebtnClicked,
}) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All categories");

  useEffect(() => {
    if (isHomeBtnClicked) {
      setSearch("");
      setCategory("All categories");
      onsetPageNumber(1);
    }
    return () => onHomebtnClicked(false);
  }, [isHomeBtnClicked, onsetPageNumber, onHomebtnClicked]);

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
      <div className="relative left-2 top-4 sm:static text-2xl sm:text-3xl font-nunito font-extrabold text-gray-900">
        My Wishlist 📃
      </div>
    );
  return (
    <div
      className="pt-4 sm:pt-0 w-11/12 sm:w-auto flex  focus:ring-2  focus:ring-slate-500"
      // className="flex focus:ring-2  focus:ring-slate-500"
    >
      <input
        type="text"
        placeholder="Search books by 'Title or the 'Author' name"
        value={search}
        className="h-8 w-3/4 sm:w-96 p-4  rounded-l-full focus:outline-none  border-yellow-400 border-2 font-nunito"
        // className="h-8 w-96 p-4  rounded-l-full focus:outline-none  border-yellow-400 border-2 font-nunito"
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
