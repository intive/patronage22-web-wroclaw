import CloseIcon from "@mui/icons-material/Close";
import { CardProps, Typography } from "@mui/material";
import { BaseButton, ButtonType, FeedbackRoute, LocalizedLink, Presentation } from "@patronage-web/shared";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import { ShareDialog } from "../../index";
import * as Styled from "./styled";

export interface DashboardCardProps extends CardProps {
  isPublic: boolean;
}
export const DashboardTile: React.FC<Presentation> = ({ id, isPublic, title, description, status }) => {
  const { t } = useTranslation();

  const [open, setOpen] = useState(false);

  const handleOpenShareDialog = () => {
    setOpen(true);
  };

  const handleCloseShareDialog = () => {
    setOpen(false);
  };

  const dashboardTileButtons = [
    { text: t("share"), action: handleOpenShareDialog },
    { text: t("end"), action: undefined }
  ];

  return (
    <Styled.DashboardTileContainer>
      <Styled.BorderCard isPublic={isPublic} raised>
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
          <Styled.DashboardTileButtonBox>
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
          </Styled.DashboardTileButtonBox>
        </Styled.DashboardTileButtonContainer>
      </Styled.BorderCard>

      <ShareDialog open={open} onClose={handleCloseShareDialog} id={id} title={title} />
    </Styled.DashboardTileContainer>
  );
};
