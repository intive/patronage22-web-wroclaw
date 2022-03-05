import { useState } from "react";

import { LocalizedLink } from "../localized-link";
import { SearchDrawer } from "./search-drawer";
import { SearchInput } from "./search-input";
import { useSearchConfig } from "./use-search-config";

export const SearchBar: React.FC = () => {
  const { searchKey, allResultsPage, singleResultPage } = useSearchConfig();
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
