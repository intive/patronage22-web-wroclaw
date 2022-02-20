// TODO end element should be replaced with CompanyInfo component when will be ready

import { Box } from "@mui/material";

import { LanguageButton } from "../language-button";

export const footerConfig = {
  start: {
    elements: [<LanguageButton />]
  },
  end: {
    elements: [<Box>CompanyInfo</Box>]
  }
};
