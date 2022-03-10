import { Box, Button } from "@mui/material";
import { ShareDialog } from "@patronage-web/features-feedback";
import { Notifications, TranslationNamespace } from "@patronage-web/shared";
import { ComponentMeta } from "@storybook/react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation(TranslationNamespace.Ui);

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
        {t("sharePresentation")}
      </Button>
      <ShareDialog open={open} onClose={handleClose} id={id} title={title} />
      <Box sx={{ display: "flex", justifyContent: "Center" }}>
        <Notifications />
      </Box>
    </Box>
  );
};

export const ShareDialogDemo = ShareDialogTemplate.bind({});
