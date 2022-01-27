import { StyledButton } from "./styles";

interface Props {
  onClick?: React.MouseEventHandler<HTMLElement>;
  text: string;
  color?: "primary" | "secondary";
  children?: React.ReactNode;
}

export const HomepageButton: React.FC<Props> = ({ onClick, text, color }) => <StyledButton>{text}</StyledButton>;
