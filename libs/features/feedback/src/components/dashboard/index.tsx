import { BaseButton, ButtonType, FeedbackRoute, LocalizedLink, TranslationNamespace, useUrlParams } from "@patronage-web/shared";
import { presentationsMock } from "@patronage-web/shared-data";
import { useTranslation } from "react-i18next";

import { Presentation } from "../../types";
import * as Styled from "./styled";
import { PresentationTile } from "./tile";

// TODO - replace with redux action when ready
const presentationJson = JSON.stringify(presentationsMock);
const presentation: Presentation[] = JSON.parse(presentationJson);

export const Dashboard = () => {
  const { t } = useTranslation(TranslationNamespace.Feedback);

  const url = useUrlParams();

  const { search } = url.params;

  const find = () => {
    const searchPhrase = search.toLowerCase();
    return Object.values(presentation).filter(x => x.title.toLowerCase().includes(searchPhrase));
  };

  const searchArr = search ? find() : presentation;

  return (
    <Styled.DashContainer>
      <Styled.NewPresentationButtonContainer>
        <LocalizedLink to={FeedbackRoute.AddPresentation}>
          <BaseButton type={ButtonType.Basic} variant='contained'>
            {t("homepage.newPresentationButton")}
          </BaseButton>
        </LocalizedLink>
      </Styled.NewPresentationButtonContainer>

      <Styled.FeedbackDashboardGrid container columns={{ xs: 4, sm: 8, md: 12 }}>
        {Object.values(searchArr).map(({ id, isPublic, title, description, status }) => (
          <Styled.TileGrid key={id}>
            <PresentationTile id={id} isPublic={isPublic} title={title} description={description} status={status} />
          </Styled.TileGrid>
        ))}
      </Styled.FeedbackDashboardGrid>
    </Styled.DashContainer>
  );
};
