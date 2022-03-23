import { styled } from "@mui/material";
import { Form } from "@patronage-web/shared";

export const TitleAndButtons = styled(Form)(({ theme }) => ({
  maxWidth: theme.spacing(60),
  display: "flex",
  flexDirection: "row"
}));

export const BasicPresentationInfo = styled(Form)(({ theme }) => ({
  maxWidth: theme.spacing(60),

  "& .MuiFormControl-root": {
    flexGrow: 1
  }
}));
