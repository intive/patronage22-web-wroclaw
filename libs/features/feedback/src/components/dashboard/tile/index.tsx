import CloseIcon from "@mui/icons-material/Close";
import { ButtonGroup, Card, Typography } from "@mui/material";
import { BaseButton, ButtonType, FeedbackRoute, LocalizedLink, Presentation } from "@patronage-web/shared";
import { useTranslation } from "react-i18next";

import * as Styled from "./styled";

export interface TileProps {
  presentation: Presentation;
}

export const Tile: React.FC<TileProps> = ({ presentation }) => {
  const { t } = useTranslation();

  return (
    <Styled.TileContainer>
      <Card className={presentation.isPublic ? "public" : ""}>
        <Styled.Header
          title={<Typography noWrap>{presentation.title}</Typography>}
          subheader={
            <Typography variant='subtitle2' noWrap>
              {presentation.description}
            </Typography>
          }
          action={
            <BaseButton type={ButtonType.Icon}>
              <CloseIcon />
            </BaseButton>
          }
        />
        <Styled.ButtonContainer>
          <ButtonGroup>
            <BaseButton type={ButtonType.Basic} variant='outlined'>
              {t("dashboard.share")}
            </BaseButton>
            <BaseButton type={ButtonType.Basic} variant='outlined'>
              {t("dashboard.end")}
            </BaseButton>
            <BaseButton type={ButtonType.Basic} variant='outlined'>
              <LocalizedLink to={FeedbackRoute.EditPresentation} routerParams={{ id: presentation.id }}>
                {t("dashboard.edit")}
              </LocalizedLink>
            </BaseButton>
          </ButtonGroup>
        </Styled.ButtonContainer>
      </Card>
    </Styled.TileContainer>
  );
};
