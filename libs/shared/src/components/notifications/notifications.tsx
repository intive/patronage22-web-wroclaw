/* eslint-disable react/jsx-props-no-spreading */
import { Box } from "@mui/material";
import { useSelector } from "react-redux";

import { selectNotifications } from "../../data";
import { Notification } from "../base-notification";

export const Notifications: React.FC = () => {
  const notifications = useSelector(selectNotifications);

  const visibleNotifications = notifications.map(item => {
    return <Notification {...item} key={item.id} />;
  });

  return <Box>{visibleNotifications}</Box>;
};
