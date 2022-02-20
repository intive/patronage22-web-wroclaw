import { styled } from "@mui/material/styles";
import { Form } from "@patronage-web/shared";

export const TitleAndDescription = styled(Form)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "3fr 1fr",
  gridTemplateRows: "auto auto",
  columnGap: theme.spacing(1),
  rowGap: theme.spacing(2),
  gridTemplateAreas: `"title buttons"
      "desc desc"`,
  maxWidth: theme.spacing(92),
  margin: theme.spacing(2),

  "& .MuiFormControl-root:first-of-type": {
    gridArea: "title"
  },

  "& .MuiFormControl-root:last-of-type": {
    gridArea: "desc"
  },

  "& .MuiButtonGroup-root": {
    gridArea: "buttons"
  }
}));
