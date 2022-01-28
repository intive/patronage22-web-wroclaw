import { ButtonProps } from "@mui/material/Button";
import { StyledButton } from "./styles";

export const HomepageButton: React.FC<ButtonProps> = () => {
  const onClickHandler = (): void => {
    console.log("button click placeholder");
  };

  return <StyledButton onClick={onClickHandler}>New presentation</StyledButton>;
};
