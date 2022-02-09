import { ThemeProvider } from "@patronage-web/shared";
import { MemoryRouter } from "react-router-dom";

export const decorators = [
  Story => (
    <MemoryRouter>
      <Story />
    </MemoryRouter>
  ),
  Story => (
    <ThemeProvider>
      <Story />
    </ThemeProvider>
  )
];
