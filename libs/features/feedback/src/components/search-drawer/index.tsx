import CloseIcon from "@mui/icons-material/Close";
import { Drawer } from "@mui/material";
import { BaseButton, ButtonType, LocalizedLink, PagePath, SearchInput, SearchService } from "@patronage-web/shared";
import { ChangeEvent, useState } from "react";
import { useTranslation } from "react-i18next";

import { PresentationItem } from "../presentation-item";
import * as Styled from "./styled";

interface SearchDrawerProps {
  open: boolean;
  onClose: () => void;
}

export const SearchDrawer: React.FC<SearchDrawerProps> = ({ open, onClose }) => {
  const { t } = useTranslation();
  const presentations = SearchService("");
  const [currentPresentations, setCurrentPresentations] = useState(presentations);
  const [searchingPhrase, setSearchingPhrase] = useState("");
  const searchHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setCurrentPresentations(SearchService(event.target.value));
    setSearchingPhrase(event.target.value);
  };

  return (
    <Drawer anchor='top' open={open} onClose={onClose} variant='temporary'>
      <Styled.DrawerHeader>
        <SearchInput onChange={searchHandler} autoFocus />
        <Styled.ClosingButtonWrapper>
          <BaseButton type={ButtonType.Icon} onClick={onClose}>
            <CloseIcon />
          </BaseButton>
        </Styled.ClosingButtonWrapper>
      </Styled.DrawerHeader>
      <Styled.MenuItemBox>
        {currentPresentations.map(presentation => (
          <PresentationItem onClose={onClose} presentation={presentation} key={presentation.item.id} />
        ))}
        <LocalizedLink to={PagePath.Dashboard} searchPhrase={searchingPhrase} style={{ textDecoration: "none", width: "100%" }}>
          <Styled.ShowResultsButtonBox>
            <BaseButton type={ButtonType.Basic} onClick={onClose}>
              {t("dashboard.showResultsButton")}
            </BaseButton>
          </Styled.ShowResultsButtonBox>
        </LocalizedLink>
      </Styled.MenuItemBox>
    </Drawer>
  );
};
