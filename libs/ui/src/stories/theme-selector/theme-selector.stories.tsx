import { Box, Button, Checkbox } from "@mui/material";
import { ThemeProvider, ThemeSelector } from "@patronage-web/features-feedback";
import { ComponentMeta } from "@storybook/react";

export default {
  title: "ThemeSelector",
  component: ThemeProvider
} as ComponentMeta<typeof ThemeProvider>;

const ThemeSelectorTemplate = () => {
  return (
    <ThemeProvider>
      <Box>
        <ThemeSelector />
        <Checkbox />
        <Button variant='contained'>Demo</Button>
      </Box>
    </ThemeProvider>
  );
};

export const ThemeSelectorDemo = ThemeSelectorTemplate.bind({});
