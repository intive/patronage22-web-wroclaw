import CloseIcon from "@mui/icons-material/Close";
import { Drawer } from "@mui/material";
import { LocalizedLink, PagePath, SearchInput, SearchService } from "@patronage-web/shared";
import { ChangeEvent, useState } from "react";

import { PresentationItem } from "./PresentationItem";
import * as Styled from "./styled";

interface SearchDrawerProps {
  open: boolean;
  onClose: () => void;
}

export const SearchDrawer: React.FC<SearchDrawerProps> = ({ open, onClose }) => {
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
        <Styled.ClosingButton type='button' onClick={onClose}>
          <CloseIcon />
        </Styled.ClosingButton>
      </Styled.DrawerHeader>
      <Styled.MenuItemBox>
        {currentPresentations.map(presentation => (
          <PresentationItem onClose={onClose} presentation={presentation} />
        ))}
        <LocalizedLink to={PagePath.Dashboard} searchPhrase={searchingPhrase} style={{ textDecoration: "none", width: "100%" }}>
          <Styled.ShowResultsButton type='button' onClick={onClose}>
            Show all results...
          </Styled.ShowResultsButton>
        </LocalizedLink>
      </Styled.MenuItemBox>
    </Drawer>
  );
};
