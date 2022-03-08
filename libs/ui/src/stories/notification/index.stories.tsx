import { Notification, NotificationType } from "@patronage-web/shared";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Notification",
  component: Notification,
  args: {
    id: "123",
    message: "sample message",
    type: NotificationType.Info
  },
  argTypes: {
    type: {
      defaultValue: NotificationType.Info
    }
  }
} as ComponentMeta<typeof Notification>;

const NotificationTemplate: ComponentStory<typeof Notification> = ({ id, message, type }) => {
  return <Notification id={id} message={message} type={type} key={id} />;
};

export const NotificationStory = NotificationTemplate.bind({});
