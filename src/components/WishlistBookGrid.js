import React from "react";
import WishlistBookCard from "./WishListBookCard";

export default function WishlistBookGrid({ books = null, onDeleteWishlist }) {
  return (
    <div className="p-2 sm:p-8">
      <div className="grid gap-8 grid-cols-[repeat(auto-fit,minmax(200px,1fr))]">
        {books?.map((book, index) => (
          <WishlistBookCard
            onDeleteWishlist={onDeleteWishlist}
            key={index}
            index={index}
            book={book}
          />
        ))}
      </div>
    </div>
  );
}
// {
//   books.slice(0, 10).map((book, index) => <BookCard key={index} book={book} />);
// }
