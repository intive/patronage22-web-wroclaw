import { useState } from "react";

import { PagePath } from "../../types";
import { LocalizedLink } from "../localized-link";
import { SearchDrawer } from "./search-drawer";
import { SearchInput } from "./search-input";

interface SearchBarProps {
  searchKey: string;
  allResultsPage: PagePath;
  singleResultPage: PagePath;
}

export const SearchBar: React.FC<SearchBarProps> = ({ searchKey, allResultsPage, singleResultPage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(prevState => !prevState);
  };

  return (
    <>
      <LocalizedLink to={PagePath.Dashboard}>
        <SearchInput onClick={handleClick} readOnly />
      </LocalizedLink>
      <SearchDrawer open={isOpen} onClose={handleClick} searchKey={searchKey} toResult={allResultsPage} toItem={singleResultPage} />
    </>
  );
};
