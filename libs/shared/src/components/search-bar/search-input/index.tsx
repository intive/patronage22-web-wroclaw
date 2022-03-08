import SearchIcon from "@mui/icons-material/Search";
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
  customStyle?: SxProps<Theme>;
  disabled?: boolean;
}

export const SearchInput: React.FC<SearchInputProps> = ({ onChange, onClick, autoFocus, customStyle, disabled }) => {
  const { t } = useTranslation();

  return (
    <Styled.SearchInputBox sx={customStyle}>
      <Styled.SearchIconWrapper>
        <SearchIcon />
      </Styled.SearchIconWrapper>

      <Styled.SearchInputBase
        onSubmit={data => console.log(data)}
        onChange={({ searchInput }) => {
          if (onChange) {
            onChange(searchInput);
          }
        }}
        onError={errors => console.log(errors)}
        fields={[
          {
            type: FormFieldType.Text,
            name: "searchInput",
            placeholder: t("search.searchbarPlaceholder"),
            inputConfig: { "aria-label": t("search.searchAriaLabel") },
            onClick,
            disabled,
            autoFocus,
            hideEditIcon: true
          }
        ]}
        validationSchema={{
          searchInput: string().max(SEARCH_CONFIG.maxLength, t("search.maxCharLenght", { charAmount: SEARCH_CONFIG.maxLength })),
          description: string()
        }}
      />
    </Styled.SearchInputBox>
  );
};
