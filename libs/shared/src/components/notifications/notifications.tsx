import { useSelector } from "react-redux";

import { selectNotifications } from "../../data";
import { Notification } from "./notification";
import * as Styled from "./styled";

export const Notifications: React.FC = () => {
  const notifications = useSelector(selectNotifications);

  const visibleNotifications = notifications.map(({ id, type, message }) => {
    return <Notification id={id} message={message} type={type} key={id} />;
  });

  return (
    <Styled.NotificationsStack direction='column-reverse' alignItems='center' spacing={0.5}>
      {visibleNotifications}
    </Styled.NotificationsStack>
  );
};
