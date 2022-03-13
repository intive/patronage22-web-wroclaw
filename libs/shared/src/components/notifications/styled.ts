import { Snackbar, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";

export const NotificationSnackbar = styled(Snackbar)(() => ({
  position: "static"
}));

export const NotificationsStack = styled(Stack)(({ theme }) => ({
  position: "absolute",
  padding: theme.spacing(1),
  bottom: 0
}));
