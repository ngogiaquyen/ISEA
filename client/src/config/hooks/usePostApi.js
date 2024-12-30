import { useState } from "react";

function usePostApi(url) {
  const [dataRes, setDataRes] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const post = async (body) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.text();
      setDataRes(result);
      return result; 
      
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { dataRes, error, loading, post };
}

export default usePostApi;
