import { BaseNotification, NotificationType } from "@patronage-web/shared";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "BaseNotification",
  component: BaseNotification
} as ComponentMeta<typeof BaseNotification>;

const NotificationTemplate: ComponentStory<typeof BaseNotification> = ({ notification }) => {
  return <BaseNotification notification={notification} />;
};

export const BaseNotificationStory = NotificationTemplate.bind({});
BaseNotificationStory.argTypes = {
  notification: {
    control: "none",
    defaultValue: { id: "123", message: "sample message", type: NotificationType.AutohidingSnackbar }
  }
};

export const SuccessNotificationStory = NotificationTemplate.bind({});
SuccessNotificationStory.argTypes = {
  notification: {
    control: "none",
    defaultValue: { id: "123", message: "success message", type: NotificationType.SuccessSnackbar }
  }
};

export const ErrorNotificationStory = NotificationTemplate.bind({});
ErrorNotificationStory.argTypes = {
  notification: {
    control: "none",
    defaultValue: { id: "123", message: "error message", type: NotificationType.ErrorSnackbar }
  }
};
