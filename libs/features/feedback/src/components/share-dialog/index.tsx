import { ShareTwoTone } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Snackbar
} from "@mui/material";
import { useState } from "react";
import QRCode from "react-qr-code";

export interface ShareDialogProps {
  open: boolean;
  onClose(): void;
  link: string;
  code: number;
}

export const ShareDialog: React.FC<ShareDialogProps> = props => {
  const { open, onClose, link, code } = props;

  const handleClose = () => {
    onClose();
  };

  const [message, setMessage] = useState<string>("");
  const [snackOpen, setSnackOpen] = useState(false);

  const handleSnackClose = () => {
    setSnackOpen(false);
  };

  const onSuccess = () => {
    setMessage("Link copied");
  };
  const onFail = () => {
    setMessage("Link copying failed");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(link).then(onSuccess, onFail);
    setSnackOpen(true);
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <Container fixed>
        <ShareTwoTone fontSize='large' />
      </Container>
      <DialogTitle>Share presentation</DialogTitle>
      <DialogContent>
        <DialogContentText>The voting code {code} is valid now.</DialogContentText>
        <QRCode value={link} size={128} />
        <Box>{link}</Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button variant='contained' onClick={handleCopy}>
          Copy
        </Button>
      </DialogActions>
      <Snackbar
        open={snackOpen}
        onClose={handleSnackClose}
        anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
        autoHideDuration={1500}
        message={message}
      />
    </Dialog>
  );
};

export const SimpleDialogDemo = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const link = "www.jakisprzykladowylink.com";
  const code = 123456;

  return (
    <div>
      <Button variant='outlined' onClick={handleClickOpen}>
        Open a dialog
      </Button>
      <ShareDialog open={open} onClose={handleClose} link={link} code={code} />
    </div>
  );
};
