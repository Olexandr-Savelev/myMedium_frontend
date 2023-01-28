import { useEffect, useState } from "react";

export type UseFetch<T> = {
  error?: Error;
  loading: boolean;
  data?: T;
};

export function useFetch<T>(url?: string): UseFetch<T> {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<T | undefined>(undefined);
  const [error, setError] = useState<Error | undefined>(undefined);

  useEffect(() => {
    if (!url) return;
    setLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then(setData)
      .finally(() => setLoading(false))
      .catch((error) => setError(error));
  }, [url]);

  return {
    loading,
    data,
    error,
  };
}
