import { Box } from "@mui/material";
import { BaseButton, ButtonType, FeedbackRoute, LocalizedLink, TranslationNamespace } from "@patronage-web/shared";
import { presentationsMock } from "@patronage-web/shared-data";
import { useTranslation } from "react-i18next";

import { Presentation } from "../../types";
import * as Styled from "./styled";
import { PresentationTile } from "./tile";

// TODO - replace with redux action when ready
const presentation: Presentation[] = presentationsMock;

export const Dashboard = () => {
  const { t } = useTranslation(TranslationNamespace.Feedback);

  return (
    <Box>
      <Styled.NewPresentationButtonContainer>
        <LocalizedLink to={FeedbackRoute.AddPresentation}>
          <BaseButton type={ButtonType.Basic} variant='outlined'>
            {t("homepage.newPresentationButton")}
          </BaseButton>
        </LocalizedLink>
      </Styled.NewPresentationButtonContainer>
      <Styled.FeedbackDashboardGrid container>
        {Object.values(presentation).map(({ id, isPublic, title, description, status }) => (
          <Styled.TileGrid key={id}>
            <PresentationTile id={id} isPublic={isPublic} title={title} description={description} status={status} />
          </Styled.TileGrid>
        ))}
      </Styled.FeedbackDashboardGrid>
    </Box>
  );
};
