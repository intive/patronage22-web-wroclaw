import { Notification, NotificationType } from "@patronage-web/shared";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useTranslation } from "react-i18next";
import { v4 as uuidv4 } from "uuid";

export default {
  title: "Notification",
  component: Notification,
  argTypes: {
    type: {
      control: "radio",
      defaultValue: NotificationType.Info
    },
    id: {
      control: "none"
    },
    message: {
      control: "none"
    }
  }
} as ComponentMeta<typeof Notification>;

const NotificationTemplate: ComponentStory<typeof Notification> = (args: { type: NotificationType }) => {
  const { t } = useTranslation();
  const id = uuidv4();
  const message = t("sample message");
  const { type } = args;
  return <Notification id={id} message={message} type={type} key={id} />;
};

export const NotificationStory = NotificationTemplate.bind({});
