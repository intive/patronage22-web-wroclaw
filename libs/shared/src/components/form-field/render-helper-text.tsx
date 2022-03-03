import { FormHelperText } from "@mui/material";
import { FieldValues, UseFormStateReturn } from "react-hook-form";

export const renderHelperText = (errors: UseFormStateReturn<FieldValues>["errors"], helperText?: string) => {
  if (errors) {
    return <FormHelperText error={!!errors}>{errors.message}</FormHelperText>;
  }

  return helperText && <FormHelperText>{helperText}</FormHelperText>;
};
