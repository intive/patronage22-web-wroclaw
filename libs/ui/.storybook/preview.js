import { ThemeProvider } from "@patronage-web/shared";
import { MemoryRouter } from "react-router-dom";
import { I18nWrapper } from "./i18n-wrapper";

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
  ),
  Story => (
    <I18nWrapper>
      <Story />
    </I18nWrapper>
  )
];
