import { Snackbar, SnackbarOrigin } from "@mui/material";

export interface BaseSnackbarProps {
  open: boolean;
  onClose: () => void;
  anchorOrigin: SnackbarOrigin | undefined;
  autoHideDuration: number;
  message: string;
}

export const BaseSnackbar: React.FC<BaseSnackbarProps> = ({ open, onClose, anchorOrigin, autoHideDuration, message }) => {
  return (
    <Snackbar open={open} onClose={onClose} anchorOrigin={anchorOrigin} autoHideDuration={autoHideDuration} message={message} />
  );
};
