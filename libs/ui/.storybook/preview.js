import { CssBaseline } from "@mui/material";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { dark, light } from "@patronage-web/shared";
import { store } from "@patronage-web/shared-data";
import { ThemeProvider as EmotionThemeProvider } from "emotion-theming";
import { Provider as StoreProvider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { I18nWrapper } from "./i18n-wrapper";

export const parameters = {
  backgrounds: {
    values: [
      { name: "light", value: light.palette.background.default },
      { name: "dark", value: dark.palette.background.default }
    ]
  },
  layout: "fullscreen"
};

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
  },
  Story => (
    <I18nWrapper>
      {Story()}
    </I18nWrapper>
  ),
  Story => (
    <StoreProvider store={store}>
      {Story()}
    </StoreProvider>
  )
];
