import { Button } from "@mui/material";
import { useState } from "react";

import { ShareDialog } from "../share-dialog";

export const ShareDialogDemo = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const id = "23456jkdnnakdbxkjbjxb,anx,nkahxdkn,m,bajvxjgkabn,";
  const presentationName = "Sample Presentation Name";

  return (
    <div>
      <Button variant='outlined' onClick={handleClickOpen}>
        Open a dialog
      </Button>
      <ShareDialog open={open} onClose={handleClose} id={id} title={presentationName} />
    </div>
  );
};
