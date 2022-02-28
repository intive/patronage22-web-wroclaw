import Fuse from "fuse.js";

import { items, ItemsType } from "../../data/features/feedback/mocks/items";

interface SearchHandlerConfig {
  key: string;
  text?: string;
  offset: number;
  limit: number;
}

type SearchHandlerType = (args: SearchHandlerConfig) => Fuse.FuseResult<ItemsType>[];

export const sliceHandler = (array: Fuse.FuseResult<ItemsType>[], offset: number, limit: number) =>
  array.slice(offset, offset + limit);

export const searchHandler: SearchHandlerType = ({ key, text, offset, limit }) => {
  const fuse = new Fuse(items, {
    keys: [key]
  });

  if (text) {
    return sliceHandler(fuse.search(text), offset, limit);
  }

  return sliceHandler(
    items.map((item, index) => ({
      item,
      matches: [],
      refIndex: index
    })),
    offset,
    limit
  );
};
