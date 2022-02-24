import { PagePath } from "@patronage-web/shared";
import { useState } from "react";

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
      <SearchInput onClick={handleClick} readOnly />
      <SearchDrawer open={isOpen} onClose={handleClick} searchKey={searchKey} toResult={allResultsPage} toItem={singleResultPage} />
    </>
  );
};
