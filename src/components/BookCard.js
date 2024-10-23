import React, { useEffect, useState } from "react";

import { cleaningGenreData } from "../utils/utils";

export default function BookCard({
  book,
  index,
  onAddWishlist,
  onDeleteWishlist,
  isAdded,
}) {
  const [isVisible, setIsVisible] = useState(false);

  function handleAdd() {
    const newAddedBook = {
      id: book.id,
      coverUrl: book.coverUrl
        ? book.coverUrl
        : `${process.env.PUBLIC_URL}/cover.jpg`,
      title:
        book.title.split(" ").length > 15
          ? book.title.split(" ").slice(0, 10).join(" ") + "..."
          : book.title,
      author: book.author || "N/A",
      genre: cleaningGenreData(book.genre),
      bookread: book.bookread,
    };

    onAddWishlist(newAddedBook);
  }

  function handleRemove() {
    onDeleteWishlist(book.id);
  }

  // Use effect to control when each card becomes visible with a delay
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, index * 100); // Delay each card by index * 100ms
    return () => clearTimeout(timeout);
  }, [index]);
  return (
    <div
      className={`h-48 sm:h-auto relative bg-amber-50 rounded-lg card-shadow border-2 border-yellow-500 transition-all duration-300 transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } sm:max-w-56 hover:scale-105`}
    >
      {/* Book Cover Image */}
      <div className=" absolute right-0 top-0 sm:static bg-amber-200 pl-2 pr-4 pb-1 pt-1 w-fit  rounded-bl-lg sm:rounded-br-lg italic font-bold  text-xs sm:text-sm border-b-2 sm:border-r-2  border-l-2 border-yellow-500">
        {`# ${book.id}`}
      </div>

      <div className="p-4 || Card all items">
        <div className=" h-full w-28 sm:h-full sm:w-full sm:static absolute bottom-0 left-0 sm:flex-none flex justify-center items-center">
          <img
            src={
              book.coverUrl
                ? book.coverUrl
                : `${process.env.PUBLIC_URL}/cover.jpg`
            }
            alt={book.title.split(" ").slice(0, 15).join(" ")}
            className=" absolute bottom-0 left-0 h-full w-auto object-cover sm:static sm:w-full sm:h-48  sm:object-contain rounded-md sm:mb-4"
          />
        </div>
        <div className=" w-40 sm:w-auto sm:static absolute left-32 top-10">
          {/* Book Title */}
          <div className=" text-sm sm:text-xl font-semibold text-gray-800 mb-2">
            {book.title.split(" ").length > 15
              ? book.title.split(" ").slice(0, 10).join(" ") + "..."
              : book.title}
          </div>

          {/* Author Name */}
          <p className=" text-xs sm:text-sm text-gray-600 mb-2">
            <span className="font-semibold">Author:</span>{" "}
            {book.author || "N/A"}
          </p>

          {/* Book Genre */}
          <p className=" truncate text-xs sm:text-sm text-gray-600 italic mb-2 pb-10">
            <span className="font-semibold">Genre:</span>{" "}
            {cleaningGenreData(book.genre)}
          </p>
        </div>
      </div>
      <div className="flex w-fit gap-3 absolute bottom-3 right-3 ">
        {!isAdded ? (
          <button
            className="bg-amber-50 flex items-center justify-center flex-1 size-fit p-2 border  border-amber-600 rounded-full"
            onClick={handleAdd}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-amber-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.682l1.318-1.364a4.5 4.5 0 116.364 6.364L12 21l-7.682-7.682a4.5 4.5 0 010-6.364z"
              />
            </svg>
          </button>
        ) : (
          <button
            className="bg-pink-200 flex items-center justify-center flex-1 size-fit p-2 border  border-pink-600 rounded-full"
            onClick={handleRemove}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-pink-500"
              fill="currentColor"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.682l1.318-1.364a4.5 4.5 0 116.364 6.364L12 21l-7.682-7.682a4.5 4.5 0 010-6.364z"
              />
            </svg>
          </button>
        )}
        <button
          className="bg-amber-200 flex items-center justify-center flex-1 size-fit p-2 border  border-amber-600 rounded-full"
          onClick={() => window.open(book.bookread, "_blank")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-amber-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2m-5-4l-3 3m0 0l-3-3m3 3V4"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

//  <svg
//   xmlns="http://www.w3.org/2000/svg"
//   className="h-6 w-6 text-amber-500"
//   fill="none"
//   viewBox="0 0 24 24"
//   stroke="currentColor"
// >
//   <path
//     strokeLinecap="round"
//     strokeLinejoin="round"
//     strokeWidth="2"
//     d="M5 13l4 4L19 7"
//   />
// </svg>

// originalArray.filter(item => item.startsWith("Browsing:")).map(item => item.replace("Browsing: ", ""))

// <svg
//   xmlns="http://www.w3.org/2000/svg"
//   className="h-6 w-6 text-amber-500"
//   fill="none"
//   viewBox="0 0 24 24"
//   stroke="currentColor"
// >
//   <path
//     strokeLinecap="round"
//     strokeLinejoin="round"
//     strokeWidth="2"
//     d="M15 19l-7-7 7-7"
//   />
// </svg>

// <svg
//   xmlns="http://www.w3.org/2000/svg"
//   className="h-6 w-6 text-amber-500"
//   fill="none"
//   viewBox="0 0 24 24"
//   stroke="currentColor"
// >
//   <path
//     strokeLinecap="round"
//     strokeLinejoin="round"
//     strokeWidth="2"
//     d="M9 5l7 7-7 7"
//   />
// </svg>
