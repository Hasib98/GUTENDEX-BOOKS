import React, { useEffect, useState } from "react";

export default function WishlistBookCard({ book, index, onDeleteWishlist }) {
  const [isVisible, setIsVisible] = useState(false);

  function handleClick() {
    onDeleteWishlist(book.id);
  }

  // Use effect to control when each card becomes visible with a delay
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, index * 50); // Delay each card by index * 100ms
    return () => clearTimeout(timeout);
  }, [index]);
  return (
    <div
      className={`relative bg-amber-50 rounded-lg card-shadow border-2 border-yellow-500 transition-all duration-300 transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } max-w-56 hover:scale-95`}
    >
      <button
        className="absolute  -right-5 -top-5 bg-red-100 flex items-center justify-center flex-1 size-fit p-2 border  border-red-500 rounded-full"
        onClick={handleClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-red-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      {/* Book Cover Image */}
      <div className="  bg-amber-200 pl-2 pr-4 pb-1 pt-1 w-fit  rounded-br-lg italic font-bold text-sm border-b-2 border-r-2 border-yellow-500">
        {`# ${book.id}`}
      </div>
      <div className="p-4">
        <img
          src={
            book.coverUrl
              ? book.coverUrl
              : `${process.env.PUBLIC_URL}/cover.jpg`
          }
          alt={book.title.split(" ").slice(0, 15).join(" ")}
          className="w-full h-48 object-contain rounded-md mb-4"
        />

        {/* <div></div> */}

        {/* Book Title */}
        <div className="text-xl font-semibold text-gray-800 mb-2">
          {book.title.split(" ").length > 15
            ? book.title.split(" ").slice(0, 10).join(" ") + "..."
            : book.title}
        </div>

        {/* Author Name */}
        <p className="text-sm text-gray-600 mb-2">
          <span className="font-semibold">Author:</span> {book.author || "N/A"}
        </p>

        {/* Book Genre */}
        <p className="text-sm text-gray-600 italic mb-2 pb-10">
          <span className="font-semibold">Genre:</span> {book.genre}
        </p>
      </div>
      <div className="flex w-fit gap-3 absolute bottom-3 right-3 ">
        <div className="bg-amber-200 flex items-center justify-center flex-1 size-fit p-2 border  border-amber-600 rounded-full">
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
        </div>
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
