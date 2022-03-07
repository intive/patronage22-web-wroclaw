import { styled } from "@mui/material/styles";
import { Form } from "@patronage-web/shared";

export const BasicPresentationInfo = styled(Form)(({ theme }) => ({
  maxWidth: theme.spacing(92),

  "& .MuiInput-underline:nth-child(2)": {
    borderBottom: "none",

    "&:before": {
      borderBottom: "none"
    },

    "&:after": {
      borderBottom: "none"
    }
  }
}));
