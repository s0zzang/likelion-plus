import { useEffect, useState } from "react";

export const API_SERVER = "https://api.fesp.shop";

const useFetch = (url) => {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    setData(null);
    try {
      const res = await fetch(`${API_SERVER}${url}`);
      const result = await res.json();
      setData(result.item);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, refetch: fetchData };
};

export default useFetch;
