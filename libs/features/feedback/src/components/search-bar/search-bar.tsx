import { useState } from "react";

import { SearchDrawer } from "./search-drawer";
import { SearchInput } from "./search-input";

export const SearchBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleInputClick = () => {
    setIsOpen(prevState => !prevState);
  };

  return (
    <>
      <SearchInput onClick={handleInputClick} readOnly />
      <SearchDrawer isOpen={isOpen} onClose={handleInputClick} />
    </>
  );
};
