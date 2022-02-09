import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import { IconButton } from "@patronage-web/shared";

// TODO apply openDialogHandler when redux will be applied
export const ShareButton: React.FC = () => {
  return (
    <IconButton>
      <ShareOutlinedIcon />
    </IconButton>
  );
};
