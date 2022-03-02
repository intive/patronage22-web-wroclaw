import { useState } from "react";

import { AppRouteType } from "../../types/app-routes";
import { LocalizedLink } from "../localized-link";
import { SearchDrawer } from "./search-drawer";
import { SearchInput } from "./search-input";

interface SearchBarProps {
  searchKey: string;
  allResultsPage: AppRouteType;
  singleResultPage: AppRouteType;
}

export const SearchBar: React.FC<SearchBarProps> = ({ searchKey, allResultsPage, singleResultPage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(prevState => !prevState);
  };

  return (
    <>
      <LocalizedLink to={allResultsPage}>
        <SearchInput onClick={handleClick} readOnly />
      </LocalizedLink>
      <SearchDrawer open={isOpen} onClose={handleClick} searchKey={searchKey} toResult={allResultsPage} toItem={singleResultPage} />
    </>
  );
};
