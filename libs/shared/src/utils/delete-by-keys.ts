export const deleteByKeys = <TObject extends object>(data: TObject, keys: string[]) => {
  keys.forEach(key => delete Object.assign(data)[key]);

  return data;
};
