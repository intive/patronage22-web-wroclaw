import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment } from "@mui/material";
import { SxProps, Theme } from "@mui/material/styles";
import { MouseEvent } from "react";
import { useTranslation } from "react-i18next";
import { string } from "yup";

import { FormFieldType } from "../../../types";
import { SEARCH_CONFIG } from "../constants";
import * as Styled from "./styled";

interface SearchInputProps {
  onChange?: (value: string) => void;
  onClick?: (event: MouseEvent) => void;
  autoFocus?: boolean;
  customStyles?: SxProps<Theme>;
  disabled?: boolean;
}

export const SearchInput: React.FC<SearchInputProps> = ({ onChange, onClick, autoFocus, disabled, customStyles }) => {
  const { t } = useTranslation();

  return (
    <Styled.SearchInputBase
      sx={customStyles}
      onChange={({ searchInput }) => {
        if (onChange) {
          onChange(searchInput);
        }
      }}
      fields={[
        {
          type: FormFieldType.Text,
          name: "searchInput",
          placeholder: t("search.searchbarPlaceholder"),
          inputConfig: {
            "aria-label": t("search.searchAriaLabel"),
            startAdornment: (
              <InputAdornment position='start'>
                <SearchIcon />
              </InputAdornment>
            ),
            inputProps: { maxLength: SEARCH_CONFIG.maxLength + 1, autoComplete: "off" }
          },
          onClick,
          disabled,
          autoFocus
        }
      ]}
      validationSchema={{
        searchInput: string().max(SEARCH_CONFIG.maxLength, t("search.maxCharLength", { charAmount: SEARCH_CONFIG.maxLength }))
      }}
    />
  );
};
