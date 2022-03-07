import { Alert, Snackbar, SnackbarCloseReason } from "@mui/material";
import { useDispatch } from "react-redux";

import { SNACKBAR_AUTO_HIDE_DURATION } from "../../constants";
import { NotificationProps, removeNotification } from "../../data";
import { NotificationType } from "../../types";

// export interface BaseNotificationProps {
//   notification: Notification;
// }

export const Notification: React.FC<NotificationProps> = ({ id, type, message }) => {
  const dispatch = useDispatch();
  const handleClose = (event: Event | React.SyntheticEvent<any, Event>, reason: SnackbarCloseReason) => {
    if (reason === "timeout") {
      dispatch(removeNotification([{ id, type, message }]));
    } else {
      event.preventDefault();
    }
  };

  const types = {
    [NotificationType.Info]: (
      <Snackbar
        open
        onClose={handleClose}
        anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
        autoHideDuration={SNACKBAR_AUTO_HIDE_DURATION}
        message={message}
      />
    ),
    [NotificationType.Success]: (
      <Snackbar
        open
        onClose={handleClose}
        anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
        autoHideDuration={SNACKBAR_AUTO_HIDE_DURATION}
      >
        <Alert severity='success'>{message}</Alert>
      </Snackbar>
    ),
    [NotificationType.Error]: (
      <Snackbar
        open
        onClose={handleClose}
        anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
        autoHideDuration={SNACKBAR_AUTO_HIDE_DURATION}
      >
        <Alert severity='error'>{message}</Alert>
      </Snackbar>
    )
  };

  return types[type];
};
