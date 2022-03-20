import { styled } from "@mui/material";
import { Form } from "@patronage-web/shared";

export const TitleAndButtons = styled(Form)(({ theme }) => ({
  maxWidth: theme.spacing(60),
  display: "flex",
  flexDirection: "row"
}));

export const BasicPresentationInfo = styled(Form)(({ theme }) => ({
  maxWidth: theme.spacing(60),

  "& .MuiInput-underline:nth-child(2n)": {
    borderBottom: "none",

    "&:before": {
      borderBottom: "none"
    },

    "&:after": {
      borderBottom: "none"
    }
  }
}));
