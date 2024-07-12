import { API_SERVER } from "./useFetch";

const useMutation = (url: string, options: RequestInit = {}) => {
  const send = async (addOptions = {}) => {
    if (!url.startsWith("http")) {
      url = API_SERVER + url;
    }

    options = {
      headers: {
        "Content-Type": "application/json",
      },
      ...options,
      ...addOptions,
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      if (!response.ok) {
        if (result?.message) alert(result.message);
        throw new Error(`2xx 이외의 응답: ${response.status}`);
      }
      return result;
    } catch (err) {
      console.error(err);
      throw err;
    }
  };
  return { send };
};

export default useMutation;
