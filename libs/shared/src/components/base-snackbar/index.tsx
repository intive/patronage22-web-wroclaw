import { Snackbar, SnackbarOrigin } from "@mui/material";

import { SNACKBAR_AUTO_HIDE_DURATION } from "../../constants";

export interface BaseSnackbarProps {
  open: boolean;
  onClose: () => void;
  message: string;
}

export const BaseSnackbar: React.FC<BaseSnackbarProps> = ({ open, onClose, message }) => {
  const anchorOrigin: SnackbarOrigin = { horizontal: "center", vertical: "bottom" };

  return (
    <Snackbar
      open={open}
      onClose={onClose}
      anchorOrigin={anchorOrigin}
      autoHideDuration={SNACKBAR_AUTO_HIDE_DURATION}
      message={message}
    />
  );
};
