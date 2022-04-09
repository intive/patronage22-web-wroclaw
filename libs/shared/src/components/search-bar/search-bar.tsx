import SearchIcon from "@mui/icons-material/Search";
import { KeyboardEvent, useState } from "react";
import { useTranslation } from "react-i18next";

import { BaseButton, ButtonType } from "../base-button";
import { SearchDrawer } from "./search-drawer";
import * as Styled from "./styled";
import { useSearchConfig } from "./use-search-config";

export const SearchBar: React.FC = () => {
  const { searchKey, allResultsPage, singleResultPage } = useSearchConfig();
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  const handleClick = () => {
    setIsOpen(prevState => !prevState);
  };

  const handleEnter = (event: KeyboardEvent) => {
    if (event.key === "Enter") {
      event.preventDefault();
    }
  };

  return (
    <>
      <Styled.SearchButtonBox>
        <BaseButton
          type={ButtonType.Basic}
          onClick={handleClick}
          startIcon={<SearchIcon />}
          disableRipple
          sx={{ justifyContent: "flex-start" }}
        >
          {t("search.searchbarPlaceholder")}
        </BaseButton>
      </Styled.SearchButtonBox>
      <SearchDrawer
        open={isOpen}
        onClose={handleClick}
        searchKey={searchKey}
        toResult={allResultsPage}
        toItem={singleResultPage}
        onKeyPress={handleEnter}
      />
    </>
  );
};
