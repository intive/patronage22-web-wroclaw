import { Snackbar, SnackbarOrigin } from "@mui/material";
import { forwardRef, useImperativeHandle, useState } from "react";

import { SNACKBAR_AUTO_HIDE_DURATION } from "../../constants";

export interface BaseSnackbarProps {
  message: string;
}

export const BaseSnackbar = forwardRef(({ message }: BaseSnackbarProps, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => setIsOpen(false);
  const anchorOrigin: SnackbarOrigin = { horizontal: "center", vertical: "bottom" };
  useImperativeHandle(ref, () => ({
    show() {
      setIsOpen(true);
    }
  }));

  return (
    <Snackbar
      open={isOpen}
      onClose={handleClose}
      anchorOrigin={anchorOrigin}
      autoHideDuration={SNACKBAR_AUTO_HIDE_DURATION}
      message={message}
    />
  );
});
