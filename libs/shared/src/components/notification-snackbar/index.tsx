import { Box, Snackbar } from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";

import { selectNotifications } from "../../../data/features";
import { SNACKBAR_AUTO_HIDE_DURATION } from "../../constants";

// export interface BaseSnackbarProps {
//   message: string;
// }

// export const BaseSnackbar = forwardRef(({ message }: BaseSnackbarProps, ref) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const handleClose = () => setIsOpen(false);
//   const anchorOrigin: SnackbarOrigin = { horizontal: "center", vertical: "bottom" };
//   useImperativeHandle(ref, () => ({
//     show() {
//       setIsOpen(true);
//     }
//   }));

export const NotificationSnackbar: React.FC = ({ children }) => {
  const notifications = useSelector(selectNotifications);
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => setIsOpen(false);

  const visibleNotifications = notifications.map(item => {
    return (
      <Snackbar
        open={isOpen}
        onClose={handleClose}
        anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
        autoHideDuration={SNACKBAR_AUTO_HIDE_DURATION}
        message={item.message}
      />
    );
  });

  return <Box>{visibleNotifications}</Box>;
};
