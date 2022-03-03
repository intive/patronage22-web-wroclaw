import { useState } from "react";

import { useSearchConfig } from "../../hooks/use-search-config";
import { LocalizedLink } from "../localized-link";
import { SearchDrawer } from "./search-drawer";
import { SearchInput } from "./search-input";

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
