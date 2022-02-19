import { MenuItem } from "@mui/material";
import { styled } from "@mui/material/styles";

export const ListItem = styled(MenuItem)(({ theme }) => ({
  color: theme.palette.primary.dark
}));
