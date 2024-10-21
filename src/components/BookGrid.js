import React from "react";
import BookCard from "./BookCard";

export default function BookGrid({ books }) {
  return (
    <div className="p-8">
      <div className="grid gap-8 grid-cols-[repeat(auto-fit,minmax(200px,1fr))]">
        {books?.slice(0, 10).map((book, index) => (
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
