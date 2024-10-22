import React from "react";
import BookCard from "./BookCard";

export default function BookGrid({ books = null }) {
  return (
    <div className="p-8">
      <div className="grid gap-8 grid-cols-[repeat(auto-fit,minmax(200px,1fr))]">
        {books?.map((book, index) => (
          <BookCard
            key={index}
            book={{
              coverUrl: book.formats["image/jpeg"], // Access the image URL here
              title: book.title,
              author: book.authors.map((author) => author.name).join(", "),
              genre: book.bookshelves || ["Unknown Genre"],
              id: book.id,
            }}
          />
        ))}
      </div>
    </div>
  );
}
// {
//   books.slice(0, 10).map((book, index) => <BookCard key={index} book={book} />);
// }

// import React, { useState, useEffect } from "react";
// import BookCard from "./BookCard";

// export default function BookGrid({ books = [] }) {
//   const [visibleBooks, setVisibleBooks] = useState([]);
//   const [columns, setColumns] = useState(0);

//   // Function to calculate the number of columns based on the screen size
//   const calculateColumns = () => {
//     const containerWidth = window.innerWidth; // Get the current window width
//     const columnWidth = 200; // Set your column width here (based on your CSS)
//     const calculatedColumns = Math.floor(containerWidth / columnWidth);
//     setColumns(calculatedColumns);
//   };

//   useEffect(() => {
//     // Calculate columns on mount and on resize
//     calculateColumns();
//     window.addEventListener("resize", calculateColumns);

//     return () => {
//       window.removeEventListener("resize", calculateColumns);
//     };
//   }, []);

//   useEffect(() => {
//     // Update the visibleBooks based on the calculated columns
//     const numberOfBooksToShow = columns * 5; // Display up to `columns * 5` books
//     setVisibleBooks(books.slice(0, numberOfBooksToShow));
//   }, [columns, books]);

//   return (
//     <div className="p-8">
//       <div className="grid gap-8 grid-cols-[repeat(auto-fit,minmax(200px,1fr))]">
//         {visibleBooks.map((book, index) => (
//           <BookCard
//             key={index}
//             book={{
//               coverUrl: book.formats["image/jpeg"], // Access the image URL here
//               title: book.title,
//               author: book.authors.map((author) => author.name).join(", "),
//               genre: book.bookshelves || ["Unknown Genre"],
//               id: book.id,
//             }}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }
