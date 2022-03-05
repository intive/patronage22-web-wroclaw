import { Box } from "@mui/material";
import { useSelector } from "react-redux";

import { selectNotifications } from "../../data/features";
import { BaseNotification } from "../base-notification";

export const Notifications: React.FC = () => {
  const notifications = useSelector(selectNotifications);

  const visibleNotifications = notifications.map(item => {
    return <BaseNotification notification={item} key={item.id} />;
  });

  return <Box>{visibleNotifications}</Box>;
};
