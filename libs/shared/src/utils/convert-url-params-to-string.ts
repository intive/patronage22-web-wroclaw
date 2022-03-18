export const convertUrlParamsToString = (params: Record<string, unknown>) =>
  Object.keys(params)
    .map(key => `${key}=${params[key]}`)
    .join("&");
