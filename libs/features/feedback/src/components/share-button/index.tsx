import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import { IconButton } from "@mui/material";
import { useScreen } from "@patronage-web/shared";

// TODO apply handleClick when redux and Dialog component will be applied
export const ShareButton: React.FC = () => {
  const { isSmall } = useScreen();

  return (
    <IconButton size={isSmall ? "small" : "medium"}>
      <ShareOutlinedIcon />
    </IconButton>
  );
};
