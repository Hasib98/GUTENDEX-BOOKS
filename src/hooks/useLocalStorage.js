import { useState, useEffect } from "react";

export function useLocalStorage(initialState, key) {
  const [value, setValue] = useState(function () {
    const storedvalue = localStorage.getItem(key);
    return storedvalue ? JSON.parse(storedvalue) : initialState;
  });

  useEffect(
    function () {
      localStorage.setItem("wishlist", JSON.stringify(value));
    },
    [value, key]
  );

  return [value, setValue];
}
