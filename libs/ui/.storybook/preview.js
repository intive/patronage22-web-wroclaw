import { CssBaseline } from "@mui/material";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { dark, light } from "@patronage-web/shared";
import { MemoryRouter } from "react-router-dom";

export const parameters = {
  backgrounds: {
    values: [
      { name: "light", value: light.palette.background.default },
      { name: "dark", value: dark.palette.background.default }
    ]
  }
};

export const decorators = [
  Story => (
    <MemoryRouter>
      <Story />
    </MemoryRouter>
  ),
  (Story, context) => {
    const currentTheme = context.globals?.backgrounds?.value === dark.palette.background.default ? dark : light;

    return (
      <MuiThemeProvider theme={currentTheme}>
        <CssBaseline />
        <Story {...context} />
      </MuiThemeProvider>
    );
  }
];
