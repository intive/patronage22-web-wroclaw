import { Edit } from "@mui/icons-material";

export const renderEditIcon = (hideEditIcon: boolean | undefined): JSX.Element | null => (hideEditIcon ? null : <Edit />);
