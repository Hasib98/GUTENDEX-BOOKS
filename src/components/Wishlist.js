import { useEffect, useState } from "react";

export default function Wishlist({ wishlist, onWishlistButtonClicked }) {
  const [hasWishlist, setHasWishlist] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  function handleClick() {
    wishlist.length < 1 ? setIsOpen(true) : onWishlistButtonClicked((e) => !e);
  }

  const handleClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    wishlist.length < 1 ? onWishlistButtonClicked(false) : setHasWishlist(true);
    return () => setHasWishlist(false);
  }, [wishlist, onWishlistButtonClicked]);

  return (
    <>
      <button
        className={`${
          hasWishlist
            ? "bg-teal-100  text-teal-700 hover:bg-teal-200"
            : "bg-amber-100  text-amber-700 hover:bg-amber-200"
        } sm:h-10 w-auto p-2 rounded-xl font-nunito font-bold flex items-center justify-center sm:border-2 border-slate-400 active:ring-2 ring-sky-300 sm:static absolute bottom-2 right-2 h-8 text-sm sm:text-base `}
        onClick={handleClick}
      >
        📃 Wishlist
        <span
          className={`${
            wishlist.length > 0
              ? "bg-red-400 size-5 rounded-full text-black m-1"
              : ""
          }`}
        >
          {wishlist.length || null}
        </span>
      </button>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full text-center">
            <h2 className="text-xl font-semibold mb-4">Alert 😦</h2>
            <p className="text-gray-700 mb-6 font-bold">
              You don't have any books on wishlist 🙋🏼‍♂️ please add books
            </p>
            <button
              onClick={handleClose}
              className="bg-blue-300 text-white py-2 px-4 rounded hover:bg-blue-400 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
