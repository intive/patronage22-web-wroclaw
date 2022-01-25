import { Button } from "@mui/material";

export interface TestButtonProps {
  variant: "text" | "outlined" | "contained" | undefined;
  title: string;
}

export const TestButton: React.FC<TestButtonProps> = ({ variant, title }) => {
  return <Button variant={variant}>{title}</Button>;
};

export default TestButton;
