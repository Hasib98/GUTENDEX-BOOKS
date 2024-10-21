import { useState, useEffect } from "react";

export function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(
    function () {
      // setData(null);
      const controller = new AbortController();

      setLoading(true);
      async function fetchData() {
        try {
          setError(null);

          const response = await fetch(url, { signal: controller.signal });
          console.log(response);

          if (!response.ok) {
            throw new Error("Failed to fetch data");
          }
          const result = await response.json();
          if (result.next === null) throw new Error("Books not found");
          setData(result);
          setError(null);
        } catch (err) {
          if (err.name !== "AbortError") {
            setError(err.message);
          }
        } finally {
          setLoading(false);
          console.log("test");
        }
      }

      fetchData();
      return function () {
        controller.abort();
      };
    },
    [url]
  );

  return { data, loading, error };
}

// export default useFetch;
