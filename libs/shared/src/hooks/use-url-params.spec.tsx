import { act, renderHook } from "@testing-library/react-hooks";
import { MemoryRouter } from "react-router-dom";

import { Nullable, PaginationQueryParams, SupportedLanguage } from "../types";
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
      <MemoryRouter initialEntries={initialUrlParams ? [`/${convertUrlParamsToString(initialUrlParams)}`] : undefined}>
        {children}
      </MemoryRouter>
    )
  });

interface NotSupportedQueryParams {
  notSupportedParam?: string;
}

interface ParamsConfigProps {
  action: string;
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
    action: "return only supported params from URL and then update",
    initialUrlParams: { lang: SupportedLanguage.Pl, page: "1", size: "2", notSupportedParam: "notSupportedParam" },
    targetParams: { lang: SupportedLanguage.Pl, page: "1", size: "2" },
    updateParams: { param: { page: "4" }, target: { lang: SupportedLanguage.Pl, page: "4", size: "2" } }
  },
  {
    action: "overwrite initial hook params by url params and then replace",
    initialUrlParams: { lang: SupportedLanguage.Pl, page: "1", size: "2", notSupportedParam: "notSupportedParam" },
    initialHookParams: { page: "4", size: "12" },
    targetParams: { lang: SupportedLanguage.Pl, page: "1", size: "2" },
    updateParams: { param: { lang: "" }, target: {}, replace: true }
  },
  {
    action: "return all specified initial hook params if no url params and then remove all",
    initialHookParams: { page: "4", size: "12" },
    targetParams: { page: "4", size: "12" },
    updateParams: { param: { page: "" }, target: {}, replace: true }
  },
  {
    action: "add initial hook params if missing in url",
    initialUrlParams: { lang: SupportedLanguage.Pl, page: "1", notSupportedParam: "notSupportedParam" },
    initialHookParams: { size: "12" },
    targetParams: { lang: SupportedLanguage.Pl, page: "1", size: "12" }
  }
];

describe("useUrlParams hook usage", () => {
  paramsConfig.forEach(({ action, initialUrlParams, initialHookParams, targetParams, updateParams }) => {
    it(`should ${action} query params`, () => {
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
