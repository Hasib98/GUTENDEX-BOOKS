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
  }, [wishlist, onWishlistButtonClicked]);

  return (
    <>
      <button
        className={`${
          hasWishlist
            ? "bg-teal-100  text-teal-700"
            : "bg-amber-100  text-amber-700"
        } h-10 w-28 rounded-full font-nunito font-bold flex items-center justify-center absolute right-52`}
        onClick={handleClick}
      >
        Wishlist {wishlist.length}
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
