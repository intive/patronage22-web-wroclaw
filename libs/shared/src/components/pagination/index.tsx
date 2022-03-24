import { Pagination } from "@mui/material";
import { ChangeEvent, useEffect } from "react";
import { useTranslation } from "react-i18next";

import { ITEMS_PER_PAGE_OPTIONS } from "../../configs";
import { useScreenSize, useUrlParams } from "../../hooks";
import { FormFieldType, PaginationQueryParams } from "../../types";
import * as Styled from "./style";

const INITIAL_PAGE = 1;
const INITIAL_SIZE_POSITION = 0;
const FIRST_ITEM_PER_PAGE_POSITION = 0;
const ITEMS_PER_PAGE_RATIO = 0.5;

interface BasicPaginationProps {
  itemsPerPageLabel?: string;
  itemsCount: number;
  initialValues?: {
    page: string;
    size: string;
  };
  onChange: (page: number, size: number) => void;
}

export const BasicPagination: React.FC<BasicPaginationProps> = ({ itemsCount, initialValues, itemsPerPageLabel, onChange }) => {
  const { isMobile } = useScreenSize();
  const { t } = useTranslation();
  const initialSize = ITEMS_PER_PAGE_OPTIONS[INITIAL_SIZE_POSITION];

  const { params, updateParams } = useUrlParams<PaginationQueryParams>(
    initialValues || { page: `${INITIAL_PAGE}`, size: `${initialSize}` }
  );

  const sizeFromParam = Number(params?.size);
  const pageFromParam = Number(params?.page);

  const isSizeCorrect = !!sizeFromParam && ITEMS_PER_PAGE_OPTIONS.includes(sizeFromParam);
  const size = isSizeCorrect ? sizeFromParam : initialSize;

  const pagesCount = Math.ceil(itemsCount / size);

  const isPageCorrect = !!pageFromParam && pageFromParam <= pagesCount && pageFromParam > 0;
  const page = isPageCorrect ? pageFromParam : INITIAL_PAGE;

  const lastButOnePage = pagesCount - 1;
  const shownItemsPerPageCount = page === pagesCount ? itemsCount - lastButOnePage * size : size;
  const infoText = `${sizeFromParam >= itemsCount ? itemsCount : shownItemsPerPageCount} ${t("pagination.outOf")} ${itemsCount}`;

  const pageLabel = `${itemsPerPageLabel || t("pagination.itemsPerPage")}: `;
  const pagesVisibilityCount = isMobile ? 0 : 1;

  const itemsPerPageOptions = ITEMS_PER_PAGE_OPTIONS.reduce((acc, option) => {
    if (itemsCount / option <= ITEMS_PER_PAGE_RATIO && option !== ITEMS_PER_PAGE_OPTIONS[FIRST_ITEM_PER_PAGE_POSITION]) {
      return acc;
    }

    return [...acc, { [`${option}`]: option }];
  }, [] as Record<string, number>[]);

  const handleSizeChange = (value: string) => {
    updateParams({ size: value });
    onChange(page, Number(value));
  };

  const handlePageChange = (_event: ChangeEvent<unknown>, currentPage: number) => {
    updateParams({ page: `${currentPage}` });
    onChange(currentPage, size);
  };

  useEffect(() => {
    if (!isPageCorrect || !isSizeCorrect) {
      updateParams({ page: `${page}`, size: `${size}` });
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
          initialValues={{ sizeSelector: size }}
          validationSchema={{}}
          fields={[
            {
              type: FormFieldType.Select,
              name: "sizeSelector",
              values: itemsPerPageOptions,
              hideEditIcon: true
            }
          ]}
          onChange={({ sizeSelector }) => {
            handleSizeChange(sizeSelector);
          }}
        />
        <Styled.InfoBox>{infoText}</Styled.InfoBox>
      </Styled.SectionBox>
    </Styled.PaginationBox>
  );
};
