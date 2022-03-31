import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Tooltip } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { TranslationNamespace } from "../../types";
import { BaseButton, ButtonType } from "../base-button";
import * as Styled from "./styled";

const PREVIOUS_PAGE = -1;

export const PreviousPageButton = () => {
  // TODO replace routing logic with redux-first-routing when will be ready
  const navigate = useNavigate();
  const { t } = useTranslation(TranslationNamespace.Common);
  const previousPageMessage = t("goToPage.previous");

  return (
    <Styled.PreviousPageButtonWrapper>
      <BaseButton type={ButtonType.Icon} onClick={() => navigate(PREVIOUS_PAGE)} sx={Styled.PreviousButtonStyle}>
        <Tooltip title={previousPageMessage}>
          <ArrowBackIcon sx={Styled.BackArrowIconStyle} />
        </Tooltip>
        {previousPageMessage}
      </BaseButton>
    </Styled.PreviousPageButtonWrapper>
  );
};
