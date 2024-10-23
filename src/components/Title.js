export default function Title({ onWishlistButtonClicked, onHomeBtnClicked }) {
  function handleClick() {
    onWishlistButtonClicked(false);
    onHomeBtnClicked(true);
  }
  return (
    <button
      className=" self-start sm:self-auto active:bg-gray-300 p-2 rounded-2xl font-vastshado text-gray-900 font-bold"
      // className="hover:bg-gray-300 p-2 rounded-2xl font-vastshado text-black font-bold"
      onClick={handleClick}
    >
      📚 Gutendex Books
    </button>
  );
}
