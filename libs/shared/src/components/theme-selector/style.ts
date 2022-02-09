import DarkModeTwoToneIcon from "@mui/icons-material/DarkModeTwoTone";
import LightModeTwoToneIcon from "@mui/icons-material/LightModeTwoTone";
import { IconButton as MUIIconButton } from "@mui/material";
import { styled } from "@mui/material/styles";

export const IconButton = styled(MUIIconButton)({
  position: "relative",
  width: "24px",
  height: "24px"
});

export const DarkModeIcon = styled(DarkModeTwoToneIcon)({
  position: "absolute",
  left: "4,17%",
  right: "4,17%",
  top: "4,17%",
  bottom: "4,17%"
});

export const LightModeIcon = styled(LightModeTwoToneIcon)({
  position: "absolute",
  left: "4,17%",
  right: "4,17%",
  top: "4,17%",
  bottom: "4,17%"
});
