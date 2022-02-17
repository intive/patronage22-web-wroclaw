import SearchIcon from "@mui/icons-material/Search";
import { ChangeEvent, MouseEvent } from "react";

import * as Styled from "./styled";

interface SearchInputProps {
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onClick?: (event: MouseEvent<HTMLDivElement>) => void;
  autoFocus?: boolean;
  readOnly?: boolean;
}

export const SearchInput: React.FC<SearchInputProps> = ({ onChange, onClick, readOnly, autoFocus }) => {
  return (
    <Styled.Search>
      <Styled.SearchIconWrapper>
        <SearchIcon />
      </Styled.SearchIconWrapper>
      <Styled.BaseInput
        placeholder='Search presentations'
        inputProps={{ "aria-label": "search" }}
        onChange={onChange}
        onClick={onClick}
        readOnly={readOnly}
        autoFocus={autoFocus}
      />
    </Styled.Search>
  );
};
