import { ShareDialog, ShareDialogProps } from "@patronage-web/features-feedback";
import { ComponentMeta } from "@storybook/react";

export const ShareDialogStory = ({ open, onClose, link, code }: ShareDialogProps) => (
  <ShareDialog open={open} onClose={onClose} link={link} code={code} />
);

export default {
  title: "ShareDialog",
  component: ShareDialogStory,
  args: {
    link: "www.google.com",
    code: 123456
  },
  argTypes: {
    open: {
      control: { type: "select" },
      defaultValue: true,
      options: [false, true]
    }
  }
} as ComponentMeta<typeof ShareDialog>;
