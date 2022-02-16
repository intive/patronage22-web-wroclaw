import { ShareTwoTone } from "@mui/icons-material";
import { Box, Button, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
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

  return (
    <Dialog open={open} onClose={handleClose}>
      <Container fixed>
        <ShareTwoTone fontSize='large' />
      </Container>
      <DialogTitle>Share presentation</DialogTitle>
      <DialogContent>
        <QRCode value={link} size={128} />
        <DialogContentText>The voting code {code} is valid now.</DialogContentText>
        <Box>{link}</Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button variant='contained' onClick={handleClose}>
          Copy
        </Button>
      </DialogActions>
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

  const link = "www.google.pl";
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
