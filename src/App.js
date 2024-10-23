import { useState } from "react";
import BookGrid from "./components/BookGrid";
import Navbar from "./components/Navbar";
import { useFetch } from "./hooks/useFetch";
import Search from "./components/Search";
import Title from "./components/Title";
import NumResults from "./components/NumResults";
import Wishlist from "./components/Wishlist";
import { useLocalStorage } from "./hooks/useLocalStorage";
import WishlistBookGrid from "./components/WishlistBookGrid";

export default function App() {
  const [query, setQuery] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const [isWishlistButtonClicked, setIsWishlistButtonClicked] = useState(false);
  const [isHomeBtnClicked, setIsHomeBtnClicked] = useState(false);

  const { data, loading, error } = useFetch(query);

  const [wishlist, setWishlist] = useLocalStorage([], "wishlist");

  const ids = wishlist.map((book) => book.id);

  function handleAddWishlist(book) {
    setWishlist((wishlist) => [...wishlist, book]);
  }
  function handleDeleteWishlist(id) {
    setWishlist((wishlist) => wishlist.filter((book) => book.id !== id));
  }

  return (
    <>
      <Navbar>
        <Title
          onWishlistButtonClicked={setIsWishlistButtonClicked}
          onHomeBtnClicked={setIsHomeBtnClicked}
        />
        <Search
          pageNumber={pageNumber}
          onsetPageNumber={setPageNumber}
          onSetQuery={setQuery}
          isWishlistButtonClicked={isWishlistButtonClicked}
          isHomeBtnClicked={isHomeBtnClicked}
          onHomebtnClicked={setIsHomeBtnClicked}
        />
        <Wishlist
          onWishlistButtonClicked={setIsWishlistButtonClicked}
          wishlist={wishlist}
        />
        <NumResults count={data?.count} />
      </Navbar>
      {/* >>>>>>>>>>>>>>> */}
      <div className="flex justify-center sm:justify-start sm:scale-100 scale-75">
        {/* <div className=""> */}
        <PaginationGroup
          onSetPageNumber={setPageNumber}
          pageNumber={pageNumber}
          data={data}
          onSetQuery={setQuery}
        />
        {/* </div> */}
      </div>
      {isWishlistButtonClicked ? (
        <WishlistBookGrid
          books={wishlist}
          onDeleteWishlist={handleDeleteWishlist}
        />
      ) : (
        <>
          {loading && <Loader />}
          {!loading && !error && data && (
            <BookGrid
              books={data.results}
              onAddWishlist={handleAddWishlist}
              onDeleteWishlist={handleDeleteWishlist}
              ids={ids}
            />
          )}
          {error && <ErrorMessage message={error} />}
          {loading || (
            <div className="flex justify-center">
              <PaginationGroup
                onSetPageNumber={setPageNumber}
                pageNumber={pageNumber}
                data={data}
                onSetQuery={setQuery}
              />
            </div>
          )}
        </>
      )}
    </>
  );
}

function Pagination({ children }) {
  return <div className=" gap-1 w-fit flex">{children}</div>;
}
function MiddleButton({ value, pageNumber, onSetPageNumber }) {
  return (
    <button
      className={`${
        value === pageNumber ? "bg-purple-300" : "bg-amber-200"
      } flex items-center justify-center min-w-10 p-2 border  border-slate-500 rounded-xl text-slate-500 font-bold`}
      onClick={() => onSetPageNumber(value)}
    >
      {value}
    </button>
  );
}
function LeftArrow({ onSetPageNumber }) {
  return (
    <button
      className="bg-amber-200 flex items-center justify-center  size-fit p-2 border  border-slate-500 rounded-xl"
      onClick={() => onSetPageNumber((e) => (e > 1 ? e - 1 : e))}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-slate-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </button>
  );
}
function RightArrow({ data, onSetPageNumber }) {
  function handleClick() {
    data?.next && onSetPageNumber((e) => e + 1);
    // onSetPageNumber((e) => data?.next && e + 1);
  }
  return (
    <button
      className="bg-amber-200 flex items-center justify-center  size-fit p-2 border  border-slate-500 rounded-xl"
      onClick={handleClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-slate-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 5l7 7-7 7"
        />
      </svg>
    </button>
  );
}
function Loader() {
  return (
    <div className="flex flex-col  gap-10 items-center justify-center min-h-screen">
      <div className="flex space-x-2">
        <div className="w-4 h-4 bg-amber-500 rounded-full animate-bounce delay-100"></div>
        <div className="w-4 h-4 bg-amber-500 rounded-full animate-bounce delay-500"></div>
        <div className="w-4 h-4 bg-amber-500 rounded-full animate-bounce delay-1000"></div>
      </div>
      <div className="text-3xl">
        Please wait, Sometimes It takes time load the Books (loading..⏳)
      </div>
    </div>
  );
}
function ErrorMessage({ message }) {
  return (
    <p className="error">
      <span>🚨</span> {message}
    </p>
  );
}

function PaginationGroup({ pageNumber, onSetPageNumber, onSetQuery, data }) {
  return (
    // <div className="bg-red-200 flex justify-center">
    <Pagination>
      <LeftArrow onSetPageNumber={onSetPageNumber} />
      {Array.from({ length: 5 }, (_, i) => (
        <MiddleButton
          key={i}
          value={pageNumber <= 5 ? i + 1 : pageNumber - 4 + i}
          pageNumber={pageNumber}
          onSetPageNumber={onSetPageNumber}
        />
      ))}
      <RightArrow
        data={data}
        onSetPageNumber={onSetPageNumber}
        onSetQuery={onSetQuery}
      />
    </Pagination>
    // </div>
  );
}
