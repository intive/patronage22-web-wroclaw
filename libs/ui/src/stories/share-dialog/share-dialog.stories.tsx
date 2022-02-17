import { Box, Button } from "@mui/material";
import { ShareDialog } from "@patronage-web/features-feedback";
import { ComponentMeta } from "@storybook/react";
import { useState } from "react";

export default {
  title: "ShareDialog",
  component: ShareDialog,
  args: {
    link: "https://intive.com/",
    code: 123456
  }
} as ComponentMeta<typeof ShareDialog>;

const ShareDialogTemplate = (args: { link: string; code: number }) => {
  const [open, setOpen] = useState(false);

  const { link, code } = args;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <Button variant='outlined' onClick={handleClickOpen}>
        Open share dialog
      </Button>
      <ShareDialog open={open} onClose={handleClose} link={link} code={code} />
    </Box>
  );
};

export const ShareDialogDemo = ShareDialogTemplate.bind({});
