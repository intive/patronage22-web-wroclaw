import { Alert, Snackbar, SnackbarCloseReason, SnackbarContent } from "@mui/material";
import { useDispatch } from "react-redux";

import { SNACKBAR_AUTO_HIDE_DURATION } from "../../constants";
import { NotificationProps, removeNotification } from "../../data";
import { NotificationType } from "../../types";

export const Notification: React.FC<NotificationProps> = ({ id, type, message }) => {
  const dispatch = useDispatch();

  const handleClose = (event: Event | React.SyntheticEvent<any, Event>, reason: SnackbarCloseReason) => {
    if (reason === "timeout") {
      dispatch(removeNotification([{ id, type, message }]));
    } else {
      event.preventDefault();
    }
  };

  const messages = {
    [NotificationType.Info]: <SnackbarContent message={message} />,
    [NotificationType.Success]: <Alert severity='success'>{message}</Alert>,
    [NotificationType.Error]: <Alert severity='error'>{message}</Alert>
  };

  return (
    <Snackbar
      open
      onClose={handleClose}
      anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
      autoHideDuration={SNACKBAR_AUTO_HIDE_DURATION}
    >
      {messages[type]}
    </Snackbar>
  );
};
