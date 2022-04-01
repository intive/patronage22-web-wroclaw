import { Pagination } from "@mui/material";
import { ChangeEvent, useEffect } from "react";
import { useTranslation } from "react-i18next";

import { PAGINATION_CONFIG } from "../../configs";
import { useScreenSize, useUrlParams } from "../../hooks";
import { FormFieldType, PaginationQueryParams } from "../../types";
import * as Styled from "./styled";

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

  const { itemsPerPageOptions, initialPage, initialSizePosition, firstItemPerPagePosition, itemsPerPageRatio } = PAGINATION_CONFIG;
  const initialSize = itemsPerPageOptions[initialSizePosition];

  const { params, updateParams } = useUrlParams<PaginationQueryParams>(
    initialValues || { page: `${initialPage}`, size: `${initialSize}` }
  );

  const sizeFromParam = Number(params?.size);
  const pageFromParam = Number(params?.page);

  const isSizeCorrect = !!sizeFromParam && itemsPerPageOptions.includes(sizeFromParam);
  const size = isSizeCorrect ? sizeFromParam : initialSize;

  const pagesCount = Math.ceil(itemsCount / size);

  const isPageCorrect = !!pageFromParam && pageFromParam <= pagesCount && pageFromParam > 0;
  const page = isPageCorrect ? pageFromParam : initialPage;

  const penultimatePage = pagesCount - 1;
  const lastPageItemsCount = itemsCount - penultimatePage * size;

  const itemsPerPageCount = page === pagesCount ? lastPageItemsCount : size;
  const shownItemsPerPageCount = sizeFromParam >= itemsCount ? itemsCount : itemsPerPageCount;
  const infoText = `${shownItemsPerPageCount} ${t("pagination.outOf")} ${itemsCount}`;

  const pageLabel = `${itemsPerPageLabel || t("pagination.itemsPerPage")}: `;
  const pagesVisibilityLevel = isMobile ? 0 : 1;

  const selectItemsPerPageOptions = itemsPerPageOptions.reduce<Record<string, number>[]>((acc, sizeOption) => {
    const isSizeFirstOption = sizeOption === itemsPerPageOptions[firstItemPerPagePosition];
    const isSizeRatioCorrect = itemsCount / sizeOption > itemsPerPageRatio;

    if (!isSizeRatioCorrect && !isSizeFirstOption) {
      return acc;
    }

    acc.push({ [`${sizeOption}`]: sizeOption });

    return acc;
  }, []);

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
        boundaryCount={pagesVisibilityLevel}
        siblingCount={pagesVisibilityLevel}
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
              values: selectItemsPerPageOptions,
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
