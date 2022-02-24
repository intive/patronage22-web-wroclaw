import { PagePath } from "@patronage-web/shared";

import { SearchDrawer } from "./search-drawer";
import { SearchInput } from "./search-input";

interface SearchBarProps {
  open: boolean;
  onClose: () => void;
  searchKey: string;
  allResultsPage: PagePath;
  singleResultPage: PagePath;
}
export const SearchBar: React.FC<SearchBarProps> = ({ open, onClose, searchKey, allResultsPage, singleResultPage }) => {
  return (
    <>
      <SearchInput onClick={onClose} readOnly />
      <SearchDrawer open={open} onClose={onClose} searchKey={searchKey} toResult={allResultsPage} toItem={singleResultPage} />
    </>
  );
};
