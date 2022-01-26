import { Button } from "@mui/material";

export enum TestButtonVariant {
  text = "text",
  outlined = "outlined",
  contained = "contained"
}

export interface TestButtonProps {
  variant?: TestButtonVariant;
  title: string;
}

export const TestButton: React.FC<TestButtonProps> = ({ variant, title }) => <Button variant={variant}>{title}</Button>;
