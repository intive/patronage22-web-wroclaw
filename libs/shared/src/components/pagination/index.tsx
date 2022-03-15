import { Pagination } from "@mui/material";
import { ChangeEvent, useEffect } from "react";
import { useTranslation } from "react-i18next";

import { useScreenSize, useURLParams } from "../../hooks";
import { PaginationQueryParams } from "../../types";
import { BasicSelect, BasicSelectProps, SelectItem } from "../basic-select";
import * as Styled from "./style";

const INITIAL_PAGE = 1;
const INITIAL_SIZE_POSITION = 0;

interface BasicPaginationProps {
  itemsPerPageOptions: number[];
  itemsCount: number;
  selectStyles?: BasicSelectProps["sx"];
  initialValues?: {
    page: string;
    size: string;
  };
  onChange: (page: number, size: number) => void;
}

export const BasicPagination: React.FC<BasicPaginationProps> = ({
  itemsPerPageOptions,
  itemsCount,
  selectStyles,
  initialValues,
  onChange
}) => {
  const { isMobile } = useScreenSize();
  const { t } = useTranslation();
  const initialSize = itemsPerPageOptions[INITIAL_SIZE_POSITION];

  const { params, setParams } = useURLParams<PaginationQueryParams>(
    ["lang", "page", "size"],
    initialValues || { page: INITIAL_PAGE, size: initialSize }
  );

  const sizeFromParam = Number(params?.size);
  const pageFromParam = Number(params?.page);

  const isSizeCorrect = !!sizeFromParam && itemsPerPageOptions.includes(sizeFromParam);
  const size = isSizeCorrect ? sizeFromParam : initialSize;

  const pagesCount = Math.ceil(itemsCount / size);
  const infoText = `${sizeFromParam >= itemsCount ? itemsCount : size} ${t("pagination.outOf")} ${itemsCount}`;

  const isPageCorrect = !!pageFromParam && pageFromParam <= pagesCount && pageFromParam > 0;
  const page = isPageCorrect ? pageFromParam : INITIAL_PAGE;

  const itemsPerPage = itemsPerPageOptions.map(data => {
    return { name: data.toString(), value: data };
  });

  const handleSelectChange = (value: SelectItem["value"]) => {
    setParams({ size: value as string });
    onChange(page, value as number);
  };

  const handlePageChange = (event: ChangeEvent<unknown>, currentPage: number) => {
    setParams({ page: currentPage.toString() });
    onChange(currentPage, size);
  };

  useEffect(() => {
    if (!isPageCorrect || !isSizeCorrect) {
      setParams({ page, size });
    } else {
      onChange(page, size);
    }
  }, [isPageCorrect, isSizeCorrect, onChange, page, setParams, size]);

  return (
    <Styled.PaginationBox>
      <Pagination
        page={page}
        count={pagesCount}
        onChange={handlePageChange}
        showFirstButton
        showLastButton
        size='large'
        boundaryCount={isMobile ? 0 : 1}
        siblingCount={isMobile ? 0 : 1}
      />
      <Styled.PaginationSectionBox>
        <BasicSelect
          sx={selectStyles}
          value={size}
          size='small'
          onChangeHandler={handleSelectChange}
          label={t("pagination.show")}
          items={itemsPerPage}
        />
        <Styled.PaginationInfoBox>{infoText}</Styled.PaginationInfoBox>
      </Styled.PaginationSectionBox>
    </Styled.PaginationBox>
  );
};
