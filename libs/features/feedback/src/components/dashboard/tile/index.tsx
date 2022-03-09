import CloseIcon from "@mui/icons-material/Close";
import { Box, Card, Typography } from "@mui/material";
import { BaseButton, ButtonType, FeedbackRoute, LocalizedLink, Presentation } from "@patronage-web/shared";
import { useTranslation } from "react-i18next";

import * as Styled from "./styled";

export const DashboardTile: React.FC<Presentation> = ({ id, isPublic, title, description, status }) => {
  const { t } = useTranslation();

  const dashboardTileButtons = [
    { text: t("share"), action: undefined },
    { text: t("end"), action: undefined }
  ];

  return (
    <Styled.DashboardTileContainer>
      <Card className={isPublic ? "public" : ""}>
        <Styled.DashboardTileHeader
          title={<Typography noWrap>{title}</Typography>}
          subheader={
            <Typography variant='subtitle2' noWrap>
              {description}
            </Typography>
          }
          action={
            <BaseButton type={ButtonType.Icon}>
              <CloseIcon />
            </BaseButton>
          }
        />

        <Styled.DashboardTileButtonContainer>
          <Box>
            {dashboardTileButtons.map(({ text, action }) => (
              <BaseButton type={ButtonType.Basic} onClick={action} variant='outlined'>
                {text}
              </BaseButton>
            ))}
            <LocalizedLink to={FeedbackRoute.EditPresentation} routerParams={{ id }}>
              <BaseButton type={ButtonType.Basic} variant='outlined'>
                {t("edit")}
              </BaseButton>
            </LocalizedLink>
          </Box>
        </Styled.DashboardTileButtonContainer>
      </Card>
    </Styled.DashboardTileContainer>
  );
};
