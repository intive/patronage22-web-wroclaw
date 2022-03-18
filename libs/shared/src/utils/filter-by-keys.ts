import { pick } from "lodash";

const omitEmptyValues = <TObject>(data: Record<string, unknown>) =>
  Object.entries(data).reduce((acc, [key, value]) => {
    if (!value) {
      return acc;
    }

    return { ...acc, [`${key}`]: value };
  }, {} as TObject);

export const filterByKeys = <TObject>(data: Record<string, unknown>, keys: (keyof TObject)[]) =>
  omitEmptyValues(pick(data, keys)) as TObject;
