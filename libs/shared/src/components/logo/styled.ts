import { ImageOutlined as ImageOutlinedIcon } from "@mui/icons-material";
import styled from "styled-components";

// TODO when theme config will be applied - replace with theme color
export const BasicLogo = styled(ImageOutlinedIcon).attrs({
  fontSize: "large"
})`
  color: rgb(59, 59, 59);
  width: 30px;
  display: flex;
  align-self: center;
`;
