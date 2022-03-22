import { pick } from "lodash";

const omitEmptyValues = <TData>(data: Record<string, unknown>) =>
  Object.entries(data).reduce((acc, [key, value]) => {
    if (!value) {
      return acc;
    }

    return { ...acc, [`${key}`]: value };
  }, {} as TData);

export const filterByKeys = <TData>(data: Record<string, unknown>, keys: (keyof TData)[]) =>
  omitEmptyValues<TData>(pick(data, keys));
