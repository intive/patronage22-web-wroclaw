import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment } from "@mui/material";
import { FormEvent } from "react";
import { useTranslation } from "react-i18next";
import { string } from "yup";

import { FormFieldType } from "../../../types";
import { SEARCH_CONFIG } from "../constants";
import * as Styled from "./styled";

interface SearchInputProps {
  onChange?: (value: string) => void;
  autoFocus?: boolean;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

export const SearchInput: React.FC<SearchInputProps> = ({ onChange, autoFocus, onSubmit }) => {
  const { t } = useTranslation();
  const maxInputLength = SEARCH_CONFIG.maxLength - 1;

  return (
    <Styled.SearchInputBase
      onChange={({ searchInput }) => {
        if (onChange) {
          onChange(searchInput);
        }
      }}
      onFormSubmit={onSubmit}
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
            inputProps: { maxLength: SEARCH_CONFIG.maxLength, autoComplete: "off" }
          },
          autoFocus
        }
      ]}
      validationSchema={{
        searchInput: string().max(maxInputLength, t("search.maxCharLength", { charAmount: SEARCH_CONFIG.maxLength }))
      }}
    />
  );
};
