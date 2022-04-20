import CloseIcon from "@mui/icons-material/Close";
import { Typography } from "@mui/material";
import { BaseButton, ButtonType, FeedbackRoute, LocalizedLink, TranslationNamespace } from "@patronage-web/shared";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import { Presentation as DashboardTileProps } from "../../../types";
import { ShareDialog } from "../../share-dialog";
import * as Styled from "./styled";

export const PresentationTile: React.FC<DashboardTileProps> = ({ id, isPublic, title, description }) => {
  const { t } = useTranslation(TranslationNamespace.Common);
  const [openDialog, setOpenDialog] = useState(false);

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  // TODO - replace undefined with proper action when ready
  const dashboardTileButtons = [
    { text: t("share"), action: handleOpenDialog },
    { text: t("end"), action: undefined }
  ];

  return (
    <Styled.PresentationTileContainer>
      <Styled.PresentationCard ispublic={isPublic.toString()} raised>
        <Styled.PresentationTileHeader
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

        <Styled.PresentationTileButtonContainer>
          <Styled.PresentationTileButtonBox>
            {dashboardTileButtons.map(({ text, action }) => (
              <BaseButton key={text} type={ButtonType.Basic} onClick={action} variant='outlined'>
                {text}
              </BaseButton>
            ))}
            <LocalizedLink to={FeedbackRoute.EditPresentation} routerParams={{ id }}>
              <BaseButton type={ButtonType.Basic} variant='outlined'>
                {t("edit")}
              </BaseButton>
            </LocalizedLink>
          </Styled.PresentationTileButtonBox>
        </Styled.PresentationTileButtonContainer>
      </Styled.PresentationCard>

      <ShareDialog open={openDialog} onClose={handleCloseDialog} id={id} title={title} />
    </Styled.PresentationTileContainer>
  );
};
