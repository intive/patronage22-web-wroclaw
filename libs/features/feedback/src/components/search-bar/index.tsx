import { SearchInput } from "@patronage-web/shared";
import { useState } from "react";

import { SearchDrawer } from "../search-drawer";

export const SearchBar: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const handleToggleDrawer = () => {
    setIsDrawerOpen(prevState => !prevState);
  };
  return (
    <>
      <SearchInput onClick={handleToggleDrawer} readOnly />
      <SearchDrawer open={isDrawerOpen} onClose={handleToggleDrawer} />
    </>
  );
};
