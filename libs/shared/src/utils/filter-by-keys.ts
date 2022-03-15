import { pick } from "lodash";

export const filterByKeys = <T>(data: Record<string, unknown>, keys: (keyof T)[]) => pick(data, keys) as T;
