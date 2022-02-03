import { Box, Button, Checkbox } from "@mui/material";
import { ThemeSelectorButton, ThemeSelectorProvider } from "@patronage-web/features-feedback";
import { ComponentMeta } from "@storybook/react";

export default {
  title: "ThemeSelector",
  component: ThemeSelectorProvider
} as ComponentMeta<typeof ThemeSelectorProvider>;

const ThemeSelectorTemplate = () => {
  return (
    <ThemeSelectorProvider>
      <Box>
        <ThemeSelectorButton />
        <Checkbox />
        <Button variant='contained'>Demo</Button>
      </Box>
    </ThemeSelectorProvider>
  );
};

export const ThemeSelectorDemo = ThemeSelectorTemplate.bind({});
