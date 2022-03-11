import { Alert, SnackbarCloseReason, SnackbarContent } from "@mui/material";
import { SyntheticEvent } from "react";
import { useDispatch } from "react-redux";

import { SNACKBAR_AUTO_HIDE_DURATION } from "../../constants";
import { NotificationInterface, removeNotification } from "../../data";
import { NotificationType } from "../../types";
import * as Styled from "./styled";

export const Notification: React.FC<NotificationInterface> = ({ id, type, message }) => {
  const dispatch = useDispatch();

  const handleClose = (event: Event | SyntheticEvent<Element, Event>, reason: SnackbarCloseReason) => {
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
    <Styled.NotificationSnackbar open onClose={handleClose} autoHideDuration={SNACKBAR_AUTO_HIDE_DURATION}>
      {messages[type]}
    </Styled.NotificationSnackbar>
  );
};
