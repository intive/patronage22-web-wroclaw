import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment } from "@mui/material";
import { BaseSyntheticEvent } from "react";
import { useTranslation } from "react-i18next";
import { string } from "yup";

import { FormFieldType, TranslationNamespace } from "../../../types";
import { SEARCH_CONFIG } from "../constants";
import * as Styled from "./styled";

interface SearchInputProps {
  onChange?: (value: string) => void;
  autoFocus?: boolean;
  onSubmit: (data: unknown, event?: BaseSyntheticEvent) => void;
}

export const SearchInput: React.FC<SearchInputProps> = ({ onChange, autoFocus, onSubmit }) => {
  const { t } = useTranslation(TranslationNamespace.Feedback);

  return (
    <Styled.SearchInputBase
      onChange={({ searchInput }) => {
        if (onChange) {
          onChange(searchInput);
        }
      }}
      onSubmit={onSubmit}
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
            inputProps: { autoComplete: "off" }
          },
          autoFocus
        }
      ]}
      validationSchema={{
        searchInput: string()
          .max(SEARCH_CONFIG.maxLength, t("search.maxCharLength", { charAmount: SEARCH_CONFIG.maxLength }))
          .min(SEARCH_CONFIG.minMatch, t("search.minCharLength", { charAmount: SEARCH_CONFIG.minMatch }))
          .ensure()
      }}
    />
  );
};
