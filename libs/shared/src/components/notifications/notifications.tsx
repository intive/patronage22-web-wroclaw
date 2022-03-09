/* eslint-disable react/jsx-props-no-spreading */

import { useSelector } from "react-redux";

import { selectNotifications } from "../../data";
import { Notification } from "./notification";
import * as Styled from "./styled";

export const Notifications: React.FC = () => {
  const notifications = useSelector(selectNotifications);

  const visibleNotifications = notifications.map(item => {
    return <Notification {...item} key={item.id} />;
  });

  return (
    <Styled.NotificationsStack direction='column-reverse' alignItems='center' spacing={0.5}>
      {visibleNotifications}
    </Styled.NotificationsStack>
  );
};
