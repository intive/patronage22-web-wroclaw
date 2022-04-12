import {
  BaseButton,
  ButtonType,
  BasicPagination,
  FeedbackRoute,
  LocalizedLink,
  TranslationNamespace,
  useUrlParams
} from "@patronage-web/shared";
import { presentationsMock } from "@patronage-web/shared-data";
import _ from "lodash";
import { useTranslation } from "react-i18next";

import { Presentation } from "../../types";
import * as Styled from "./styled";
import { PresentationTile } from "./tile";

// TODO - replace with redux action when ready
const presentationJson = JSON.stringify(presentationsMock);

const presentation: Presentation[] = JSON.parse(presentationJson);

export const Dashboard = () => {
  const { t } = useTranslation(TranslationNamespace.Feedback);

  const { search, size, page } = useUrlParams().params;

  const findPresentations = () => {
    const searchPhrase = search.toLowerCase();
    return Object.values(presentation).filter(presentation => presentation.title.toLowerCase().includes(searchPhrase));
  };

  const filteredPresentations = search ? findPresentations() : presentation;

  const itemsCount = filteredPresentations.length;

  const chunk = page - 1;

  const chunkedPresentations = page && itemsCount ? _.chunk(filteredPresentations, size)[chunk] : filteredPresentations;

  return (
    <Styled.DashContainer>
      <Styled.NewPresentationButtonContainer>
        <LocalizedLink to={FeedbackRoute.AddPresentation}>
          <BaseButton type={ButtonType.Basic} variant='contained'>
            {t("homepage.newPresentationButton")}
          </BaseButton>
        </LocalizedLink>
      </Styled.NewPresentationButtonContainer>

      <Styled.FeedbackDashboardGrid container>
        {Object.values(chunkedPresentations).map(({ id, isPublic, title, description, status }) => (
          <Styled.TileGrid key={id}>
            <PresentationTile id={id} isPublic={isPublic} title={title} description={description} status={status} />
          </Styled.TileGrid>
        ))}
      </Styled.FeedbackDashboardGrid>
      <BasicPagination itemsCount={itemsCount} onChange={() => useUrlParams} />
    </Styled.DashContainer>
  );
};
