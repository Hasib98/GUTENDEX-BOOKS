import { useState } from "react";
import BookGrid from "./components/BookGrid";
import Navbar from "./components/Navbar";
import { useFetch } from "./hooks/useFetch";
import Search from "./components/Search";
import Title from "./components/Title";
import NumResults from "./components/NumResults";

export default function App() {
  const [query, setQuery] = useState("");
  const [pageNumber, setPageNumber] = useState(1);

  console.log(query);
  const { data, loading, error } = useFetch(query);

  return (
    <>
      <Navbar>
        <Title />
        <Search
          pageNumber={pageNumber}
          onsetPageNumber={setPageNumber}
          onSetQuery={setQuery}
        />
        <NumResults count={data?.count} />
      </Navbar>
      <div className="bg-red-200 flex justify-center">
        <Pagination>
          <LeftArrow onSetPageNumber={setPageNumber} />
          {Array.from({ length: 5 }, (_, i) => (
            <MiddleButton
              key={i}
              value={pageNumber <= 5 ? i + 1 : pageNumber - 4 + i}
              pageNumber={pageNumber}
              onSetPageNumber={setPageNumber}
            />
          ))}
          <RightArrow
            data={data}
            onSetPageNumber={setPageNumber}
            onSetQuery={setQuery}
          />
        </Pagination>
      </div>

      {loading && <Loader />}
      {!loading && !error && data && <BookGrid books={data.results} />}
      {error && <ErrorMessage message={error} />}
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
function RightArrow({ data, onSetQuery, onSetPageNumber }) {
  function handleClick() {
    onSetPageNumber((e) => e + 10);
    // onSetQuery(data?.next);
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
    <p className="text-3xl">Please wait API response is Slow (loading..⏳)</p>
  );
}
function ErrorMessage({ message }) {
  return (
    <p className="error">
      <span>🚨</span> {message}
    </p>
  );
}
