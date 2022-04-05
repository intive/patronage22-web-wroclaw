import CloseIcon from "@mui/icons-material/Close";
import { Typography } from "@mui/material";
import {
  BaseButton,
  ButtonType,
  FeedbackRoute,
  LocalizedLink,
  Presentation as DashboardTileProps,
  TranslationNamespace
} from "@patronage-web/shared";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import { ShareDialog } from "../../share-dialog";
import * as Styled from "./styled";

export const DashboardTile: React.FC<DashboardTileProps> = ({ id, isPublic, title, description }) => {
  const { t } = useTranslation(TranslationNamespace.Common);

  const [open, setOpen] = useState(false);

  const handleOpenDialog = () => {
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
  };

  const dashboardTileButtons = [
    { text: t("share"), action: handleOpenDialog },
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

      <ShareDialog open={open} onClose={handleCloseDialog} id={id} title={title} />
    </Styled.DashboardTileContainer>
  );
};
