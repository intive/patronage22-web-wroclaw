import { Button } from "@mui/material";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { ShareDialog } from "../share-dialog";

export const ShareDialogDemo: React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleButtonClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const id = uuidv4();
  const title = "Sample Presentation Title";

  return (
    <>
      <Button variant='outlined' onClick={handleButtonClick}>
        sharePresentation
      </Button>
      <ShareDialog open={open} onClose={handleClose} id={id} title={title} />
    </>
  );
};
