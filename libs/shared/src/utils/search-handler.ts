import Fuse from "fuse.js";

import { PresentationSearchItem } from "../components/search-bar/types";
import { items } from "../mocks";

interface SearchHandlerConfig {
  key: string;
  text?: string;
  offset: number;
  limit: number;
}

type SearchHandlerType = (args: SearchHandlerConfig) => Fuse.FuseResult<PresentationSearchItem>[];

export const chunkSearchResults = (array: Fuse.FuseResult<PresentationSearchItem>[], offset: number, limit: number) =>
  array.slice(offset, offset + limit);

export const searchHandler: SearchHandlerType = ({ key, text, offset, limit }) => {
  const fuse = new Fuse(items, {
    keys: [key],
    minMatchCharLength: 3
  });

  const searchText = text == null ? "" : text.trim();

  return chunkSearchResults(fuse.search(searchText), offset, limit);
};
