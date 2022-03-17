import SearchIcon from "@mui/icons-material/Search";
import { t } from "i18next";
import { useState } from "react";

import { BaseButton, ButtonType } from "../base-button";
import { SearchDrawer } from "./search-drawer";
import * as Styled from "./styled";
import { useSearchConfig } from "./use-search-config";

export const SearchBar: React.FC = () => {
  const { searchKey, allResultsPage, singleResultPage } = useSearchConfig();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(prevState => !prevState);
  };

  return (
    <>
      <Styled.SearchButtonBox>
        <BaseButton type={ButtonType.Basic} onClick={handleClick} startIcon={<SearchIcon />} sx={{ justifyContent: "flex-start" }}>
          {t("search.searchbarPlaceholder")}
        </BaseButton>
      </Styled.SearchButtonBox>
      <SearchDrawer open={isOpen} onClose={handleClick} searchKey={searchKey} toResult={allResultsPage} toItem={singleResultPage} />
    </>
  );
};
