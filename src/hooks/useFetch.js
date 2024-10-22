import { useState, useEffect } from "react";

export function useFetch(query) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(
    function () {
      const controller = new AbortController();

      async function fetchData() {
        try {
          setLoading(true);

          setError(null);

          const response = await fetch(query, { signal: controller.signal });

          if (!response.ok) {
            throw new Error("Failed to fetch data");
          }
          const result = await response.json();
          if (result.count === 0) throw new Error("Books are not avaiable");
          setData(result);
          setError(null);
        } catch (err) {
          if (err.name !== "AbortError") {
            setError(err.message);
          }
        } finally {
          if (!controller.signal.aborted) {
            setLoading(false);
          }
        }
      }

      fetchData();
      return function () {
        controller.abort();
        setData(null);
        // setLoading(true);
      };
    },
    [query]
  );

  return { data, loading, error };
}

// export default useFetch;
