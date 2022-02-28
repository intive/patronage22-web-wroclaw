import CloseIcon from "@mui/icons-material/Close";
import { Drawer } from "@mui/material";
import { ChangeEvent, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

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
  const items = searchHandler({ key: searchKey, offset: 0, limit: 5 });
  const [currentItems, setCurrentItems] = useState(items);
  const [searchPhrase, setSearchPhrase] = useState("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length > 2) {
      setSearchPhrase(event.target.value);
    }
  };

  const onCloseDrawer = () => {
    onClose();
    setSearchPhrase("");
  };

  useEffect(() => {
    setCurrentItems(searchHandler({ key: searchKey, text: searchPhrase, offset: 0, limit: 5 }));
  }, [searchPhrase, searchKey]);

  return (
    <Drawer anchor='top' open={open} onClose={onCloseDrawer} variant='temporary'>
      <Styled.SearchDrawerHeader>
        <SearchInput onChange={handleInputChange} autoFocus />
        <Styled.CloseSearchBtnWrapper>
          <BaseButton type={ButtonType.Icon} onClick={onCloseDrawer}>
            <CloseIcon />
          </BaseButton>
        </Styled.CloseSearchBtnWrapper>
      </Styled.SearchDrawerHeader>

      <Styled.SearchDrawerContentBox>
        {currentItems.map(item => {
          return <SearchItem onClose={onCloseDrawer} item={item.item} key={item.item.id} toResult={toItem} />;
        })}
        {!currentItems.length && <p>{t("search.noResultsInfo")}</p>}
        <LocalizedLink to={toResult} searchPhrase={searchPhrase}>
          <Styled.SearchResultsBtnBox>
            <BaseButton type={ButtonType.Basic} onClick={onCloseDrawer}>
              {t("search.showResultsButton")}
            </BaseButton>
          </Styled.SearchResultsBtnBox>
        </LocalizedLink>
      </Styled.SearchDrawerContentBox>
    </Drawer>
  );
};
