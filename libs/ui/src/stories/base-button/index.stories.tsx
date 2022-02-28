import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import { BaseButton, ButtonType } from "@patronage-web/shared";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "BaseButton",
  component: BaseButton
} as ComponentMeta<typeof BaseButton>;

const ButtonTemplate: ComponentStory<typeof BaseButton> = ({ children, onClick, type, variant }) => {
  return (
    <BaseButton type={type} variant={variant} onClick={onClick}>
      {children}
    </BaseButton>
  );
};

export const BaseButtonStory = ButtonTemplate.bind({});
BaseButtonStory.argTypes = {
  type: {
    control: "none",
    defaultValue: ButtonType.Basic
  },
  children: {
    control: {
      type: "text"
    },
    defaultValue: "Test"
  },
  variant: {
    control: { type: "select" },
    options: ["text", "outlined", "contained"]
  }
};

export const BaseIconButtonStory = ButtonTemplate.bind({});
BaseIconButtonStory.argTypes = {
  type: {
    defaultValue: ButtonType.Icon,
    control: "none"
  },
  children: {
    defaultValue: <ShareOutlinedIcon />,
    control: "none"
  },
  variant: {
    control: "none"
  }
};
