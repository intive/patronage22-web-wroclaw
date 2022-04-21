import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Field = styled(Box)({
  display: "inline-flex",
  justifyContent: "flex-start",
  alignItems: "center",
  width: "100%",

  "& #editIcon": {
    visibility: "hidden"
  },

  "&:hover": {
    "& #editIcon": {
      visibility: "visible"
    }
  }
});
