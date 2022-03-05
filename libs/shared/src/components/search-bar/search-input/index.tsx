import SearchIcon from "@mui/icons-material/Search";
import { SxProps, Theme } from "@mui/material/styles";
import { ChangeEvent, MouseEvent } from "react";
import { useTranslation } from "react-i18next";

import { SEARCH_CONFIG } from "../constants";
import * as Styled from "./styled";

interface SearchInputProps {
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onClick?: (event: MouseEvent<HTMLDivElement>) => void;
  autoFocus?: boolean;
  readOnly?: boolean;
  customStyle?: SxProps<Theme>;
}

export const SearchInput: React.FC<SearchInputProps> = ({ onChange, onClick, readOnly, autoFocus, customStyle }) => {
  const { t } = useTranslation();

  return (
    <Styled.SearchInputBox sx={customStyle}>
      <Styled.SearchIconWrapper>
        <SearchIcon />
      </Styled.SearchIconWrapper>

      <Styled.SearchInputBase
        placeholder={t("search.searchbarPlaceholder")}
        inputProps={{ "aria-label": t("search.searchAriaLabel"), maxLength: `${SEARCH_CONFIG.maxLenght}` }}
        onChange={onChange}
        onClick={onClick}
        readOnly={readOnly}
        autoFocus={autoFocus}
      />
    </Styled.SearchInputBox>
  );
};
