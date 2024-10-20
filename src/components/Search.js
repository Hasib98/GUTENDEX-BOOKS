import { useState } from "react";

export default function Search() {
  const [search, setSearch] = useState("");
  return (
    <input
      type="text"
      value={search}
      className="w-96 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}
