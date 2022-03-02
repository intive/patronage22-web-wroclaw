import Fuse from "fuse.js";

import { items } from "../../mocks";
import { PresentationSearchItem } from "../components/search-bar";
import { SEARCH_CONFIG } from "../constants";

interface SearchHandlerConfig {
  keys: string[];
  text?: string;
  offset: number;
  limit: number;
}

type SearchHandlerType = (config: SearchHandlerConfig) => Fuse.FuseResult<PresentationSearchItem>[];

export const chunkSearchResults = (elements: Fuse.FuseResult<PresentationSearchItem>[], offset: number, limit: number) =>
  elements.slice(offset, offset + limit);

export const searchHandler: SearchHandlerType = ({ keys, text, offset, limit }) => {
  const fuse = new Fuse(items, {
    keys: [keys],
    minMatchCharLength: SEARCH_CONFIG.minMatch
  });

  const trimText = text?.trim() ?? "";

  return chunkSearchResults(fuse.search(trimText), offset, limit);
};
