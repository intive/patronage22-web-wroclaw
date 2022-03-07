import { AppRouteType } from "../../types";

export interface SearchItemId {
  id: string;
}

export interface PresentationSearchItem extends SearchItemId {
  title: string;
}

export interface ConfigSearchBar {
  searchKey: string;
  allResultsPage: AppRouteType;
  singleResultPage: AppRouteType;
}
