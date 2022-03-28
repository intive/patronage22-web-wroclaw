import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Tooltip } from "@mui/material";
import { BaseButton, ButtonType } from "@patronage-web/shared";
import { useNavigate } from "react-router-dom";

import * as Styled from "./styled";

export const PreviousPageButton = () => {
  // TODO replace routing logic with redux-first-routing when will be ready
  const navigate = useNavigate();

  return (
    <Styled.PageToggleButtons>
      <BaseButton type={ButtonType.Icon} onClick={() => navigate(-1)} sx={{ borderRadius: 0 }}>
        <Tooltip title='Previous page'>
          <ArrowBackIcon />
        </Tooltip>
      </BaseButton>

      <BaseButton type={ButtonType.Icon} onClick={() => navigate(1)} sx={Styled.LeftButton}>
        <Tooltip title='Next page'>
          <ArrowForwardIcon />
        </Tooltip>
      </BaseButton>
    </Styled.PageToggleButtons>
  );
};
