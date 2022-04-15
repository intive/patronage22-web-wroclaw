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
import { useTranslation } from "react-i18next";

import { Presentation } from "../../types";
import * as Styled from "./styled";
import { PresentationTile } from "./tile";

// TODO - replace with redux action when ready
const presentationJson = JSON.stringify(presentationsMock);
const presentation: Presentation[] = JSON.parse(presentationJson);

export const Dashboard = () => {
  const { t } = useTranslation(TranslationNamespace.Feedback);
  const { params } = useUrlParams();
  const { search, size, page } = params;

  const filterPresentationsByName = () => {
    const searchPhrase = search.toLowerCase();

    return Object.values(presentation).filter(presentation => presentation.title.toLowerCase().includes(searchPhrase));
  };

  const filteredPresentations = search ? filterPresentationsByName() : presentation;
  const itemsCount = filteredPresentations.length;
  const chunkIndex = page - 1;
  const isPaginationable = page && itemsCount;
  const chunkedPresentations = isPaginationable ? chunk(filteredPresentations, size)[chunkIndex] : filteredPresentations;

  return (
    <Styled.FeedbackDashboardContainer>
      <Styled.NewPresentationButtonContainer>
        <LocalizedLink to={FeedbackRoute.AddPresentation}>
          <BaseButton type={ButtonType.Basic} variant='contained'>
            {t("homepage.newPresentationButton")}
          </BaseButton>
        </LocalizedLink>
      </Styled.NewPresentationButtonContainer>

      <Styled.FeedbackDashboardGrid container>
        {chunkedPresentations.map(({ id, isPublic, title, description, status }) => (
          <Styled.FeedbackTileGrid key={id}>
            <PresentationTile id={id} isPublic={isPublic} title={title} description={description} status={status} />
          </Styled.FeedbackTileGrid>
        ))}
      </Styled.FeedbackDashboardGrid>
      <BasicPagination itemsCount={itemsCount} onChange={() => useUrlParams} />
    </Styled.FeedbackDashboardContainer>
  );
};
