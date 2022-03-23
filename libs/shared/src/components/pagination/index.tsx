import { Pagination, SelectChangeEvent } from "@mui/material";
import { ChangeEvent, useEffect } from "react";
import { useTranslation } from "react-i18next";

import { useScreenSize, useUrlParams } from "../../hooks";
import { FormFieldType, PaginationQueryParams } from "../../types";
import * as Styled from "./style";

const INITIAL_PAGE = 1;
const INITIAL_SIZE_POSITION = 0;

interface BasicPaginationProps {
  itemsPerPageOptions: number[];
  itemsPerPageLabel?: string;
  itemsCount: number;
  initialValues?: {
    page: string;
    size: string;
  };
  onChange: (page: number, size: number) => void;
}

export const BasicPagination: React.FC<BasicPaginationProps> = ({
  itemsPerPageOptions,
  itemsCount,
  initialValues,
  itemsPerPageLabel,
  onChange
}) => {
  const { isMobile } = useScreenSize();
  const { t } = useTranslation();
  const initialSize = itemsPerPageOptions[INITIAL_SIZE_POSITION];

  const { params, updateParams } = useUrlParams<PaginationQueryParams>(
    initialValues || { page: INITIAL_PAGE.toString(), size: initialSize.toString() }
  );

  const sizeFromParam = Number(params?.size);
  const pageFromParam = Number(params?.page);

  const isSizeCorrect = !!sizeFromParam && itemsPerPageOptions.includes(sizeFromParam);
  const size = isSizeCorrect ? sizeFromParam : initialSize;

  const pagesCount = Math.ceil(itemsCount / size);
  const infoText = `${sizeFromParam >= itemsCount ? itemsCount : size} ${t("pagination.outOf")} ${itemsCount}`;

  const isPageCorrect = !!pageFromParam && pageFromParam <= pagesCount && pageFromParam > 0;
  const page = isPageCorrect ? pageFromParam : INITIAL_PAGE;

  const pageLabel = `${itemsPerPageLabel || t("pagination.itemsPerPage")}: `;
  const pagesVisibilityCount = isMobile ? 0 : 1;

  const itemsPerPage = itemsPerPageOptions.map(data => {
    return { name: data.toString(), value: data };
  });

  const handleSizeChange = (event: SelectChangeEvent<number>) => {
    const { value } = event.target;
    updateParams({ size: value as string });
    onChange(page, value as number);
  };

  const handlePageChange = (_event: ChangeEvent<unknown>, currentPage: number) => {
    updateParams({ page: currentPage.toString() });
    onChange(currentPage, size);
  };

  useEffect(() => {
    if (!isPageCorrect || !isSizeCorrect) {
      updateParams({ page: page.toString(), size: size.toString() });
    } else {
      onChange(page, size);
    }
  }, [isPageCorrect, isSizeCorrect, onChange, page, updateParams, size]);

  return (
    <Styled.PaginationBox>
      <Pagination
        page={page}
        count={pagesCount}
        onChange={handlePageChange}
        showFirstButton
        showLastButton
        size='large'
        boundaryCount={pagesVisibilityCount}
        siblingCount={pagesVisibilityCount}
      />
      <Styled.SectionBox>
        <Styled.InfoBox>{pageLabel}</Styled.InfoBox>
        <Styled.SizeSelector
          validationSchema={{}}
          fields={[
            {
              type: FormFieldType.Select,
              name: "sizeSelector",
              size: "small",
              defaultValue: size,
              selectItems: itemsPerPage,
              hideEditIcon: true,
              onChange: handleSizeChange
            }
          ]}
        />
        <Styled.InfoBox>{infoText}</Styled.InfoBox>
      </Styled.SectionBox>
    </Styled.PaginationBox>
  );
};
