import { styled } from "@mui/material";
import { Form } from "@patronage-web/shared";

export const TitleAndButtons = styled(Form)(({ theme }) => ({
  maxWidth: theme.spacing(60),
  display: "flex",
  flexDirection: "row",

  [theme.breakpoints.down("sm")]: {
    flexDirection: "column"
  }
}));

export const BasicPresentationInfo = styled(Form)(({ theme }) => ({
  maxWidth: theme.spacing(60),

  "& .MuiFormControl-root": {
    flexGrow: 1
  }
}));
