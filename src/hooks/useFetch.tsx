import { useState, useEffect } from "react";

interface CustomError {
  status: number;
  message: string;
}

export function useFetch<T>(url: string): {
  data: T | undefined;
  loading: boolean;
  error: CustomError | undefined;
} {
  const [data, setData] = useState<T>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<CustomError>();

  useEffect(() => {
    fetch(url, {
      // headers: {
      //   "X-RapidAPI-Key": "50ea0f1bd6mshce18abfb53b5ec0p157db5jsn05404bf09c72",
      //   "X-RapidAPI-Host": "free-nba.p.rapidapi.com",
      // },
    })
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => {
        console.log(error);
        setError({ status: 400, message: "error conectandose al API" });
      })
      .finally(() => setLoading(false));
  }, []);

  return { data, loading, error };
}
