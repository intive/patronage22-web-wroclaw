import { Box, Button } from "@mui/material";
import { ShareDialog } from "@patronage-web/features-feedback";
import { ComponentMeta } from "@storybook/react";
import { useState } from "react";

export default {
  title: "ShareDialog",
  component: ShareDialog,
  args: {
    id: "12345",
    title: "Moja Prezentacja"
  }
} as ComponentMeta<typeof ShareDialog>;

const ShareDialogTemplate = (args: { id: string; title: string }) => {
  const [open, setOpen] = useState(false);

  const { id, title } = args;

  const handleButtonClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <Button variant='outlined' onClick={handleButtonClick}>
        Open share dialog
      </Button>
      <ShareDialog open={open} onClose={handleClose} id={id} title={title} />
    </Box>
  );
};

export const ShareDialogDemo = ShareDialogTemplate.bind({});
