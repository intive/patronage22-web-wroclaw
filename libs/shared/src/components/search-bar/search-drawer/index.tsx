import CloseIcon from "@mui/icons-material/Close";
import { Drawer } from "@mui/material";
import { ChangeEvent, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { SEARCH_CONFIG } from "../../../constants";
import { AppRouteType } from "../../../types/app-routes";
import { searchHandler } from "../../../utils/search-handler";
import { BaseButton, ButtonType } from "../../base-button";
import { LocalizedLink } from "../../localized-link";
import { SearchInput } from "../search-input";
import { SearchItem } from "../search-item";
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

  const [currentItems, setCurrentItems] = useState(() =>
    searchHandler({ key: searchKey, offset: SEARCH_CONFIG.offset, limit: SEARCH_CONFIG.limit })
  );
  const [searchPhrase, setSearchPhrase] = useState("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchPhrase(event.target.value);
  };

  const handleCloseDrawer = () => {
    onClose();
    setSearchPhrase("");
  };

  useEffect(() => {
    setCurrentItems(
      searchHandler({ key: searchKey, text: searchPhrase, offset: SEARCH_CONFIG.offset, limit: SEARCH_CONFIG.limit })
    );
  }, [searchPhrase, searchKey]);

  return (
    <Drawer anchor='top' open={open} onClose={handleCloseDrawer} variant='temporary'>
      <Styled.SearchDrawerHeader>
        <Styled.InputBoxWrapper>
          <SearchInput onChange={handleInputChange} autoFocus />
        </Styled.InputBoxWrapper>
        <Styled.CloseSearchBtnWrapper>
          <BaseButton type={ButtonType.Icon} onClick={handleCloseDrawer}>
            <CloseIcon />
          </BaseButton>
        </Styled.CloseSearchBtnWrapper>
      </Styled.SearchDrawerHeader>

      <Styled.SearchDrawerContentBox>
        {currentItems.map(item => {
          return <SearchItem onClose={handleCloseDrawer} item={item.item} key={item.item.id} toResult={toItem} />;
        })}
        {currentItems.length === 0 && (
          <p>{searchPhrase.length < SEARCH_CONFIG.minMatch ? t("search.tooShortPhrase") : t("search.noResultsInfo")}</p>
        )}
        <LocalizedLink to={toResult} searchPhrase={searchPhrase}>
          <Styled.SearchResultsBtnBox>
            <BaseButton type={ButtonType.Basic} onClick={handleCloseDrawer}>
              {t("search.showResultsButton")}
            </BaseButton>
          </Styled.SearchResultsBtnBox>
        </LocalizedLink>
      </Styled.SearchDrawerContentBox>
    </Drawer>
  );
};
