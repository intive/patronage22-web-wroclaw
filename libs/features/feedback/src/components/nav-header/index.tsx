import { ReactElement } from "react";

import { MenuPlaceholder, SearchBarPlaceholder, StyledNavBar, StyledNavHeader } from "./style";

export interface NavHeaderProps {
  logoComponent: ReactElement;
  searchBarComponent: ReactElement;
  menuComponent: ReactElement;
}

export const NavHeader: React.FC<NavHeaderProps> = ({ logoComponent, searchBarComponent, menuComponent }) => {
  return (
    <StyledNavHeader>
      <StyledNavBar>
        {logoComponent}
        <SearchBarPlaceholder>{searchBarComponent}</SearchBarPlaceholder>
        <MenuPlaceholder>{menuComponent}</MenuPlaceholder>
      </StyledNavBar>
    </StyledNavHeader>
  );
};
