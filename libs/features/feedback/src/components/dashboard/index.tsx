import {
  BaseButton,
  BasicPagination,
  ButtonType,
  FeedbackRoute,
  LocalizedLink,
  TranslationNamespace,
  useUrlParams
} from "@patronage-web/shared";
import { presentationsMock } from "@patronage-web/shared-data";
import { chunk } from "lodash-es";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import { Presentation } from "../../types";
import * as Styled from "./styled";
import { PresentationTile } from "./tile";

// TODO - replace with redux action when ready
const MOCKED_PRESENTATIONS = presentationsMock as Presentation[];

export const Dashboard = () => {
  const [presentations, setPresentations] = useState<Presentation[]>(MOCKED_PRESENTATIONS);
  const { t } = useTranslation(TranslationNamespace.Feedback);
  const {
    params: { search }
  } = useUrlParams();

  const filterPresentationsByName = () => {
    const searchPhrase = search.toLowerCase();

    return Object.values(MOCKED_PRESENTATIONS).filter(presentation => presentation.title.toLowerCase().includes(searchPhrase));
  };

  const filteredPresentations = search ? filterPresentationsByName() : MOCKED_PRESENTATIONS;
  const itemsCount = filteredPresentations.length;

  const handlePagination = (page: number, size: number) => {
    const chunkIndex = page - 1;
    const isPaginationable = page && itemsCount;
    const chunkedPresentations = isPaginationable ? chunk(filteredPresentations, size)[chunkIndex] : filteredPresentations;

    setPresentations(chunkedPresentations);
  };

  return (
    <Styled.FeedbackDashboardContainer>
      <Styled.NewPresentationButtonContainer>
        <LocalizedLink to={FeedbackRoute.AddPresentation}>
          <BaseButton type={ButtonType.Basic} variant='contained'>
            {t("presentation.new")}
          </BaseButton>
        </LocalizedLink>
      </Styled.NewPresentationButtonContainer>

      <Styled.FeedbackDashboardGrid container>
        {presentations.map(({ id, isPublic, title, description, status }) => (
          <Styled.FeedbackTileGrid key={id}>
            <PresentationTile id={id} isPublic={isPublic} title={title} description={description} status={status} />
          </Styled.FeedbackTileGrid>
        ))}
      </Styled.FeedbackDashboardGrid>
      <BasicPagination itemsCount={itemsCount} onChange={handlePagination} itemsPerPageLabel={t("pagination.presentations")} />
    </Styled.FeedbackDashboardContainer>
  );
};
