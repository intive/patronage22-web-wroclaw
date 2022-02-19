import { styled } from "@mui/material/styles";
import { Form } from "@patronage-web/shared";

export const TitleAndDescription = styled(Form)({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gridTemplateRows: "auto",
  gridTemplateAreas: `"title buttons"
      "desc desc"`,

  "&:nth-child(1)": {
    gridArea: "title"
  },

  "&:nth-child(2)": {
    gridArea: "desc"
  },

  "&:nth-child(3)": {
    gridArea: "buttons"
  }
});
