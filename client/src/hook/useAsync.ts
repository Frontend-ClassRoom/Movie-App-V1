import { useCallback, useEffect, useState } from "react";

type StatusType = "idle" | "pending" | "success" | "error";

const useAsync = <D, E = string>(
  asyncFunction: () => Promise<D>,
  immediate = true
) => {
  const [status, setStatus] = useState<StatusType>("idle");
  const [data, setData] = useState<D | null>(null);
  const [error, setError] = useState<E | null>(null);

  const execute = useCallback(() => {
    setStatus("pending");
    setData(null);
    setError(null);

    return asyncFunction()
      .then((res: D) => {
        setData(res);
        setStatus("success");
      })
      .catch((e: E) => {
        setError(e);
        setStatus("error");
      });
  }, [asyncFunction]);

  useEffect(() => {
    if (immediate) {
      execute();
    }
  }, [execute, immediate]);

  return { execute, status, data, error };
};

export default useAsync;
