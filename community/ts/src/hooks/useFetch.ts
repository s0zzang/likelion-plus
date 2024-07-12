import { useEffect, useState } from "react";

export const API_SERVER = "https://api.fesp.shop";

const useFetch = <T>(url: string) => {
  const [data, setData] = useState<T | null>(null);
  const [totalPage, setTotalPage] = useState(0);

  const fetchData = async () => {
    setData(null);
    try {
      const res = await fetch(`${API_SERVER}${url}`);
      const result = await res.json();
      setData(result.item);
      setTotalPage(result.pagination.totalPages);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, totalPage, refetch: fetchData };
};

export default useFetch;
