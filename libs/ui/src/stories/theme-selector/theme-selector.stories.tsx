import { Box, Button } from "@mui/material";
import { ThemeProvider, ThemeSelector } from "@patronage-web/shared";
import { ComponentMeta } from "@storybook/react";

export default {
  title: "ThemeSelector",
  component: ThemeSelector
} as ComponentMeta<typeof ThemeSelector>;

const ThemeSelectorTemplate = () => {
  return (
    <ThemeProvider>
      <Box>
        <ThemeSelector />
        <Button variant='contained'>Lorem ipsum</Button>
      </Box>
    </ThemeProvider>
  );
};

export const ThemeSelectorDemo = ThemeSelectorTemplate.bind({});
