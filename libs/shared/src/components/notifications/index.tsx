import { Box, Snackbar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import { SNACKBAR_AUTO_HIDE_DURATION } from "../../constants";
import { removeNotification, selectNotifications } from "../../data/features";
import { AppDispatch } from "../../data/types";

export const Notifications: React.FC = () => {
  const notifications = useSelector(selectNotifications);
  const dispatch = useDispatch<AppDispatch>();

  const visibleNotifications = notifications.map(item => {
    return (
      <Snackbar
        open
        onClose={() => dispatch(removeNotification([item]))}
        anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
        autoHideDuration={SNACKBAR_AUTO_HIDE_DURATION}
        message={item.message}
      />
    );
  });

  return <Box>{visibleNotifications}</Box>;
};
