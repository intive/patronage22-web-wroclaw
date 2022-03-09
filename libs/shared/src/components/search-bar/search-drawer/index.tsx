import CloseIcon from "@mui/icons-material/Close";
import Fuse from "fuse.js";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { AppRouteType } from "../../../types";
import { BaseButton, ButtonType } from "../../base-button";
import { LocalizedLink } from "../../localized-link";
import { SEARCH_CONFIG } from "../constants";
import { searchHandler } from "../search-handler";
import { SearchInput } from "../search-input";
import { SearchItem } from "../search-item";
import { PresentationSearchItem } from "../types";
import * as Styled from "./styled";

interface SearchDrawerProps {
  open: boolean;
  onClose: () => void;
  searchKey: string;
  toResult: AppRouteType;
  toItem: AppRouteType;
}

export const SearchDrawer: React.FC<SearchDrawerProps> = ({ open, onClose, searchKey, toResult, toItem }) => {
  const { t } = useTranslation();

  const [currentItems, setCurrentItems] = useState<Fuse.FuseResult<PresentationSearchItem>[]>([]);

  const [searchPhrase, setSearchPhrase] = useState("");

  const handleInputChange = (value?: string) => {
    setSearchPhrase(value ?? "");
  };

  const handleCloseDrawer = () => {
    setSearchPhrase("");
    onClose();
  };

  const searchResultsInformation = searchPhrase.length < SEARCH_CONFIG.minMatch ? "minCharLength" : "noResultsInfo";

  const resultsButton = (
    <Styled.SearchResultsBtnBox>
      <BaseButton type={ButtonType.Basic} onClick={handleCloseDrawer} disabled={!currentItems.length}>
        {t("search.showResultsButton")}
      </BaseButton>
    </Styled.SearchResultsBtnBox>
  );

  const allResultsButton = currentItems.length ? (
    <LocalizedLink to={toResult} searchPhrase={searchPhrase}>
      {resultsButton}
    </LocalizedLink>
  ) : (
    resultsButton
  );

  useEffect(() => {
    setCurrentItems(
      searchHandler({ keys: [searchKey], text: searchPhrase, offset: SEARCH_CONFIG.offset, limit: SEARCH_CONFIG.limit })
    );
  }, [searchPhrase, searchKey]);

  return (
    <Styled.SearchDrawer anchor='top' open={open} onClose={handleCloseDrawer} variant='temporary'>
      <Styled.SearchDrawerHeader>
        <Styled.InputBoxWrapper>
          <SearchInput
            onChange={handleInputChange}
            autoFocus
            sx={theme => ({ [theme.breakpoints.down("sm")]: { backgroundColor: "inherit" } })}
          />
        </Styled.InputBoxWrapper>

        <Styled.CloseSearchBtnWrapper>
          <BaseButton type={ButtonType.Icon} onClick={handleCloseDrawer}>
            <CloseIcon />
          </BaseButton>
        </Styled.CloseSearchBtnWrapper>
      </Styled.SearchDrawerHeader>

      <Styled.SearchDrawerContentBox>
        {currentItems.map(item => (
          <SearchItem onClose={handleCloseDrawer} item={item.item} key={item.item.id} toResult={toItem} />
        ))}
        {!currentItems.length && (
          <Styled.Paragraph>{t(`search.${searchResultsInformation}`, { charAmount: SEARCH_CONFIG.minMatch })}</Styled.Paragraph>
        )}
        {allResultsButton}
      </Styled.SearchDrawerContentBox>
    </Styled.SearchDrawer>
  );
};
