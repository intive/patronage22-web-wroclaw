import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { URLSearchParams } from "url";

export const useCurrentParams = () => {
  const [searchParams] = useSearchParams();

  const currentParams = useMemo(
    () => ({
      params: Object.fromEntries(searchParams as URLSearchParams)
    }),
    [searchParams]
  );

  return currentParams.params;
};
