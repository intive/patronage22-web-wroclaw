import Fuse from "fuse.js";

import { items } from "../../data";
import { trimString } from "../../utils";
import { SEARCH_CONFIG } from "./constants";
import { PresentationSearchItem } from "./types";

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

  const trimText = trimString(text);

  return chunkSearchResults(fuse.search(trimText), offset, limit);
};
