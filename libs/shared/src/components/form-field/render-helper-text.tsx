import { FormHelperText } from "@mui/material";
import { FieldValues, UseFormStateReturn } from "react-hook-form";

interface Props {
  helperText: string | undefined;
  error: UseFormStateReturn<FieldValues>["errors"];
}

export const renderHelperText = ({ helperText, error }: Props): JSX.Element | null =>
  helperText || error ? <FormHelperText error={!!error}>{(error && error.message) || helperText}</FormHelperText> : null;
