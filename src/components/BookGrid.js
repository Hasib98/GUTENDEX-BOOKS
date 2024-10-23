import React from "react";
import BookCard from "./BookCard";

export default function BookGrid({
  books = null,
  onAddWishlist,
  ids,
  onDeleteWishlist,
}) {
  return (
    <div className="p-2 sm:p-8">
      <div
        className=" grid gap-8 grid-cols-[repeat(auto-fit,minmax(200px,1fr))]"
        // className="flex flex-col gap-5  sm:grid sm:gap-8 sm:grid-cols-[repeat(auto-fit,minmax(200px,1fr))]"
      >
        {books?.map((book, index) => (
          <BookCard
            onAddWishlist={onAddWishlist}
            onDeleteWishlist={onDeleteWishlist}
            key={index}
            index={index}
            book={{
              coverUrl: book.formats["image/jpeg"], // Access the image URL here
              title: book.title,
              author: book.authors.map((author) => author.name).join(", "),
              genre: book.bookshelves || ["Unknown Genre"],
              id: book.id,
              bookread: book.formats["text/html"], // Access the book URL here
            }}
            isAdded={ids.includes(book.id)}
          />
        ))}
      </div>
    </div>
  );
}
// {
//   books.slice(0, 10).map((book, index) => <BookCard key={index} book={book} />);
// }
