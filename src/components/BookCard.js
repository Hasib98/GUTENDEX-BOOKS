import React from "react";

export default function BookCard({ book }) {
  return (
    <div className="bg-blue-100 rounded-lg shadow-lg p-4 max-w-56">
      {/* Book Cover Image */}
      <img
        src={book.coverUrl}
        alt={book.title}
        className="w-full h-48 object-contain rounded-md mb-4"
      />

      <div></div>

      {/* Book Title */}
      <div className="text-xl font-semibold text-gray-800 mb-2">
        {book.title}
      </div>

      {/* Author Name */}
      <p className="text-sm text-gray-600 mb-2">
        <span className="font-semibold">Author:</span> {book.author}
      </p>

      {/* Book Genre */}
      <p className="text-sm text-gray-600 italic mb-2">
        <span className="font-semibold">Genre:</span> {book.genre.join(", ")}
      </p>

      {/* Book ID */}
      <p className="text-xs text-gray-500">
        <span className="font-semibold">Book ID:</span> {book.id}
      </p>
    </div>

    // <div className="bg-white rounded-b-xl overflow-hidden card-shadow max-w-52">
    //   {/* Book Cover Image */}
    //   <img
    //     src={book.coverUrl}
    //     alt={book.title}
    //     className="w-full h-64 object-contain"
    //   />

    //   {/* Book Details */}
    //   <div className="p-4">
    //     {/* Book Title */}
    //     <h2 className="text-xl font-semibold text-gray-800 mb-2">
    //       {book.title}
    //     </h2>

    //     {/* Author Name */}
    //     <p className="text-sm text-gray-600 mb-2">
    //       <span className="font-semibold">Author:</span> {book.author}
    //     </p>

    //     {/* Book Genre */}
    //     <p className="text-sm text-gray-600 italic mb-2">
    //       <span className="font-semibold">Genre:</span> {book.genre.join(", ")}
    //     </p>

    //     {/* Book ID */}
    //     <p className="text-xs text-gray-500">
    //       <span className="font-semibold">Book ID:</span> {book.id}
    //     </p>
    //   </div>
    // </div>
  );
}
