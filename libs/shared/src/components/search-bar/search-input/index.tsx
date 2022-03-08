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
        onSubmit={data => console.log(data)}
        onChange={({ searchInput }) => {
          if (onChange) {
            onChange(searchInput);
            console.log(searchInput);
          }
        }}
        onError={errors => console.log(errors)}
        fields={[
          {
            type: FormFieldType.SearchInput,
            name: "searchInput",
            placeholder: t("search.searchbarPlaceholder"),
            inputProps: { "aria-label": t("search.searchAriaLabel"), maxLength: `${SEARCH_CONFIG.maxLenght}` },
            handleClick: onClick,
            readOnly,
            autoFocus,
            hideEditIcon: true
          }
        ]}
        validationSchema={{
          searchInput: string().max(19, t("search.maxCharLenght", { charAmount: SEARCH_CONFIG.maxLenght })),
          description: string()
        }}
      />
    </Styled.SearchInputBox>
  );
};
