import { styled } from "@mui/material/styles";
import { Form } from "@patronage-web/shared";

export const TitleAndDescription = styled(Form)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  maxWidth: theme.spacing(92),
  margin: theme.spacing(2),

  "& .MuiFormControl-root": {
    margin: theme.spacing(1, 0)
  }
}));
