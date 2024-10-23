export default function Title({ onWishlistButtonClicked, onHomeBtnClicked }) {
  function handleClick() {
    onWishlistButtonClicked(false);
    onHomeBtnClicked(true);
  }
  return (
    <button
      className="hover:bg-gray-300 p-2 rounded-2xl font-vastshado text-black font-bold"
      onClick={handleClick}
    >
      📚 Gutendex Books
    </button>
  );
}
