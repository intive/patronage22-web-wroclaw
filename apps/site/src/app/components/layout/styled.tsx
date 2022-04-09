import { styled } from "@mui/material/styles";
import { ContentBox } from "@patronage-web/shared";

export const LayoutWrapper = styled(ContentBox)(({ theme }) => ({
  justifyContent: "flex-start",
  alignItems: "flex-start",
  marginTop: theme.spacing(1)
}));
