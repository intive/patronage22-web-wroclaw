import { Pagination } from "@mui/material";
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

  const itemsPerPage = itemsPerPageOptions.map(data => {
    return { name: data.toString(), value: data };
  });

  const handleSelectChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    updateParams({ size: value });
    onChange(page, Number(value));
  };

  const handlePageChange = (event: ChangeEvent<unknown>, currentPage: number) => {
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
        boundaryCount={isMobile ? 0 : 1}
        siblingCount={isMobile ? 0 : 1}
      />
      <Styled.SectionBox>
        <Styled.InfoBox>{`${itemsPerPageLabel || t("pagination.itemsPerPage")}: `}</Styled.InfoBox>
        <Styled.SizeSelector
          validationSchema={{}}
          fields={[
            {
              onChange: handleSelectChange,
              type: FormFieldType.Select,
              name: "sizeSelector",
              size: "small",
              defaultValue: size,
              selectItems: itemsPerPage
            }
          ]}
        />
        <Styled.InfoBox>{infoText}</Styled.InfoBox>
      </Styled.SectionBox>
    </Styled.PaginationBox>
  );
};
