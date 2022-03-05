import { Alert, Snackbar, SnackbarCloseReason } from "@mui/material";
import { useDispatch } from "react-redux";

import { SNACKBAR_AUTO_HIDE_DURATION } from "../../constants";
import { Notification, removeNotification } from "../../data/features";
import { AppDispatch } from "../../data/types";
import { NotificationType } from "../../types";

export interface BaseNotificationProps {
  notification: Notification;
}

export const BaseNotification: React.FC<BaseNotificationProps> = ({ notification }) => {
  const dispatch = useDispatch<AppDispatch>();
  const handleClose = (event: Event | React.SyntheticEvent<any, Event>, reason: SnackbarCloseReason) => {
    if (reason === "timeout") dispatch(removeNotification([notification]));
    else event.preventDefault();
  };
  const types = {
    [NotificationType.AutohidingSnackbar]: (
      <Snackbar
        open
        onClose={handleClose}
        anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
        autoHideDuration={SNACKBAR_AUTO_HIDE_DURATION}
        message={notification.message}
      />
    ),
    [NotificationType.SuccessSnackbar]: (
      <Snackbar
        open
        onClose={handleClose}
        anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
        autoHideDuration={SNACKBAR_AUTO_HIDE_DURATION}
      >
        <Alert severity='success'>{notification.message}</Alert>
      </Snackbar>
    ),
    [NotificationType.ErrorSnackbar]: (
      <Snackbar
        open
        onClose={handleClose}
        anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
        autoHideDuration={SNACKBAR_AUTO_HIDE_DURATION}
      >
        <Alert severity='error'>{notification.message}</Alert>
      </Snackbar>
    )
  };

  return types[notification.type];
};
