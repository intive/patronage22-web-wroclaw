import { Box, Button } from "@mui/material";
import { ShareDialog } from "@patronage-web/features-feedback";
import { ComponentMeta } from "@storybook/react";
import { useState } from "react";

export default {
  title: "ShareDialog",
  component: ShareDialog,
  args: {
    id: "12345",
    presentationName: "Moja Prezentacja"
  }
} as ComponentMeta<typeof ShareDialog>;

const ShareDialogTemplate = (args: { id: string; presentationName: string }) => {
  const [open, setOpen] = useState(false);

  const { id, presentationName } = args;

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
      <ShareDialog open={open} onClose={handleClose} id={id} PRESENTATION_NAME={presentationName} />
    </Box>
  );
};

export const ShareDialogDemo = ShareDialogTemplate.bind({});
