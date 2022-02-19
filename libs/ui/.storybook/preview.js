import { CssBaseline } from "@mui/material";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { dark, light, loadI18n, TranslationNamespace } from "@patronage-web/shared";
import { ThemeProvider as EmotionThemeProvider } from "emotion-theming";
import i18n from 'i18next';
import { MemoryRouter } from "react-router-dom";

loadI18n({ env: "storybook", ns: [TranslationNamespace.Feedback, TranslationNamespace.Common] });

export const parameters = {
  backgrounds: {
    values: [
      { name: "light", value: light.palette.background.default },
      { name: "dark", value: dark.palette.background.default }
    ]
  },
  i18n,
  locale: 'en',
  locales: {
    en: 'English',
    pl: 'Polish'   
  },
};

// https://github.com/stevensacks/storybook-react-i18next/issues/1
export const decorators = [
  Story => (
    <MemoryRouter>
      {Story()}
    </MemoryRouter>
  ),
  (Story, context) => {
    const currentTheme = context.globals?.backgrounds?.value === dark.palette.background.default ? dark : light;
    return (
      <EmotionThemeProvider theme={currentTheme}>
        <MuiThemeProvider theme={currentTheme}>
          <CssBaseline />
          {Story(context)}
        </MuiThemeProvider>
      </EmotionThemeProvider>
    );
  }
];
