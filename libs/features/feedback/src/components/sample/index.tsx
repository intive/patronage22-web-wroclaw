import { Button } from "@mui/material";
import React from "react";

export const SampleButton: React.FC<{ text: string; variant: string; textColor: string }> = ({ text, variant, textColor }) => {
  return (
    <Button
      variant='outlined'
      sx={{
        background: variant === "black" ? "black" : "white",
        border: variant === "black" ? "2px solid black" : "3px solid red",
        color: textColor
      }}
    >
      {text}
    </Button>
  );
};
