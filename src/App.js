import { useState } from "react";
import BookGrid from "./components/BookGrid";
import Navbar from "./components/Navbar";
import { useFetch } from "./hooks/useFetch";
import Search from "./components/Search";
import Title from "./components/Title";
import NumResults from "./components/NumResults";

export default function App() {
  const [query, setQuery] = useState("");
  const { data, loading, error } = useFetch(query);
  console.log(loading);

  return (
    <>
      <Navbar>
        <Title />
        <Search query={query} onSetQuery={setQuery} />
        <NumResults count={data?.count} />
      </Navbar>

      {loading && <Loader />}
      {!loading && !error && data && <BookGrid books={data.results} />}
      {error && <ErrorMessage message={error} />}
    </>
  );
}

function Loader() {
  return (
    <p className="loader">Please wait API response is Slow loading...⏳</p>
  );
}
function ErrorMessage({ message }) {
  return (
    <p className="error">
      <span>🚨</span> {message}
    </p>
  );
}
