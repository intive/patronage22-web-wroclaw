import CloseIcon from "@mui/icons-material/Close";
import { Drawer } from "@mui/material";
import { BaseButton, ButtonType, LocalizedLink, PagePath, searchHandler } from "@patronage-web/shared";
import { ChangeEvent, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { SearchInput } from "../search-input";
import { SearchItem } from "../search-item";
import * as Styled from "./styled";

interface SearchDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchDrawer: React.FC<SearchDrawerProps> = ({ isOpen, onClose }) => {
  const { t } = useTranslation();
  const items = searchHandler("title");
  const [currentItems, setCurrentItems] = useState(items);
  const [searchingPhrase, setSearchingPhrase] = useState("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchingPhrase(event.target.value);
  };

  useEffect(() => {
    setCurrentItems(searchHandler("title", searchingPhrase));
  }, [searchingPhrase]);

  return (
    <Drawer anchor='top' open={isOpen} onClose={onClose} variant='temporary'>
      <Styled.DrawerHeader>
        <SearchInput onChange={handleInputChange} autoFocus />
        <Styled.ClosingButtonWrapper>
          <BaseButton type={ButtonType.Icon} onClick={onClose}>
            <CloseIcon />
          </BaseButton>
        </Styled.ClosingButtonWrapper>
      </Styled.DrawerHeader>

      <Styled.MenuItemBox>
        {currentItems.map(item => {
          const { id, title } = item.item;
          return <SearchItem onClose={onClose} id={id} title={title} key={id} />;
        })}
        <LocalizedLink to={PagePath.Dashboard} searchPhrase={searchingPhrase}>
          <Styled.ShowResultsButtonBox>
            <BaseButton type={ButtonType.Basic} onClick={onClose}>
              {t("search.showResultsButton")}
            </BaseButton>
          </Styled.ShowResultsButtonBox>
        </LocalizedLink>
      </Styled.MenuItemBox>
    </Drawer>
  );
};
