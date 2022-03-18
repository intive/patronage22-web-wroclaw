import { act, renderHook } from "@testing-library/react-hooks";
import { MemoryRouter } from "react-router-dom";

import { Nullable } from "../types";
import { PaginationQueryParams } from "../types/query-params";
import { convertUrlParamsToString } from "../utils";
import { useUrlParams } from "./use-url-params";

const getHookResult = ({
  initialHookParams,
  initialUrlParams
}: {
  initialHookParams?: PaginationQueryParams;
  initialUrlParams?: Record<string, unknown>;
}) =>
  renderHook(() => useUrlParams<PaginationQueryParams>(initialHookParams || null), {
    wrapper: ({ children }) => (
      <MemoryRouter initialEntries={initialUrlParams ? [`/?${convertUrlParamsToString(initialUrlParams)}`] : undefined}>
        {children}
      </MemoryRouter>
    )
  });

interface NotSupportedQueryParams {
  something?: string;
}

interface ParamsConfigProps {
  description: string;
  initialUrlParams?: PaginationQueryParams & NotSupportedQueryParams;
  initialHookParams?: PaginationQueryParams;
  targetParams: PaginationQueryParams;
  updateParams?: {
    param: Nullable<PaginationQueryParams>;
    replace?: boolean;
    target: PaginationQueryParams;
  };
}

const paramsConfig: ParamsConfigProps[] = [
  {
    description: "Should return only supported params from URL and then update params",
    initialUrlParams: { lang: "pl", page: "1", size: "2", something: "something" },
    targetParams: { lang: "pl", page: "1", size: "2" },
    updateParams: { param: { page: "4" }, target: { lang: "pl", page: "4", size: "2" } }
  },
  {
    description: `Should overwrite initial hook params by url params and then replace params`,
    initialUrlParams: { lang: "pl", page: "1", size: "2", something: "something" },
    initialHookParams: { page: "4", size: "12" },
    targetParams: { lang: "pl", page: "1", size: "2" },
    updateParams: { param: { lang: "" }, target: {}, replace: true }
  },
  {
    description: `Should return all specified initial hook params if no url params and then remove all params`,
    initialHookParams: { page: "4", size: "12" },
    targetParams: { page: "4", size: "12" },
    updateParams: { param: { page: "" }, target: {}, replace: true }
  },
  {
    description: `Should add initial hook params if missing in url params `,
    initialUrlParams: { lang: "pl", page: "1", something: "something" },
    initialHookParams: { size: "12" },
    targetParams: { lang: "pl", page: "1", size: "12" }
  }
];

describe("useUrlParams hook usage", () => {
  paramsConfig.forEach(({ description, initialUrlParams, initialHookParams, targetParams, updateParams }) => {
    it(`${description}`, () => {
      const { result } = getHookResult({ initialUrlParams: initialUrlParams as Record<string, unknown>, initialHookParams });
      expect(result.current.params).toEqual(targetParams);

      if (updateParams) {
        const { param, replace, target } = updateParams;
        act(() => {
          result.current.updateParams(param, replace);
        });
        expect(result.current.params).toEqual(target);
      }
    });
  });
});
