import CloseIcon from "@mui/icons-material/Close";
import { Drawer } from "@mui/material";
import { BaseButton, ButtonType, LocalizedLink, PagePath, searchHandler } from "@patronage-web/shared";
import { ChangeEvent, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { SearchInput } from "../search-input";
import { SearchItem } from "../search-item";
import * as Styled from "./styled";

interface SearchDrawerProps {
  open: boolean;
  onClose: () => void;
  searchKey: string;
  toResult: PagePath;
  toItem: PagePath;
}

export const SearchDrawer: React.FC<SearchDrawerProps> = ({ open, onClose, searchKey, toResult, toItem }) => {
  const { t } = useTranslation();
  const items = searchHandler(searchKey);
  const [currentItems, setCurrentItems] = useState(items);
  const [searchPhrase, setSearchPhrase] = useState("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchPhrase(event.target.value);
  };

  useEffect(() => {
    setCurrentItems(searchHandler(searchKey, searchPhrase));
  }, [searchPhrase, searchKey]);

  return (
    <Drawer anchor='top' open={open} onClose={onClose} variant='temporary'>
      <Styled.SearchDrawerHeader>
        <SearchInput onChange={handleInputChange} autoFocus />
        <Styled.CloseSearchBtnWrapper>
          <BaseButton type={ButtonType.Icon} onClick={onClose}>
            <CloseIcon />
          </BaseButton>
        </Styled.CloseSearchBtnWrapper>
      </Styled.SearchDrawerHeader>

      <Styled.SearchDrawerContentBox>
        {currentItems.map(item => {
          return <SearchItem onClose={onClose} item={item.item} key={item.item.id} toResult={toItem} />;
        })}
        {!currentItems.length && <p>{t("search.noResultsInfo")}</p>}
        <LocalizedLink to={toResult} searchPhrase={searchPhrase}>
          <Styled.SearchResultsBtnBox>
            <BaseButton type={ButtonType.Basic} onClick={onClose}>
              {t("search.showResultsButton")}
            </BaseButton>
          </Styled.SearchResultsBtnBox>
        </LocalizedLink>
      </Styled.SearchDrawerContentBox>
    </Drawer>
  );
};
