import { useState, useEffect } from "react";
import { VStack, Text, Image, SimpleGrid } from "@chakra-ui/react";

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
    fetch(url)
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
