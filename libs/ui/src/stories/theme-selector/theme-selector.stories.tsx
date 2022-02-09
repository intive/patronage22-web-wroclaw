import { Box, Button, useTheme } from "@mui/material";
import { ThemeMode, ThemeProvider, ThemeSelector } from "@patronage-web/shared";
import { ComponentMeta } from "@storybook/react";

export default {
  title: "ThemeSelector",
  component: ThemeProvider
} as ComponentMeta<typeof ThemeProvider>;

const ThemeSelectorTemplate = () => {
  const {
    palette: { mode }
  } = useTheme();

  const buttonVariant = mode === ThemeMode.Dark ? "contained" : "text";

  return (
    <Box>
      <ThemeSelector />
      <Button variant={buttonVariant}>Lorem ipsum</Button>
    </Box>
  );
};

export const ThemeSelectorDemo = ThemeSelectorTemplate.bind({});
