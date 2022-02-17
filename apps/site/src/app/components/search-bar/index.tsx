import { SearchInput } from "@patronage-web/shared";
import { useState } from "react";

import { SearchDrawer } from "../search-drawer";

export const SearchBar: React.FC = () => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  const toggleDrawerHandler = () => {
    setDrawerIsOpen(!drawerIsOpen);
  };
  return (
    <>
      <SearchInput onClick={toggleDrawerHandler} readOnly />
      <SearchDrawer open={drawerIsOpen} onClose={toggleDrawerHandler} />
    </>
  );
};
