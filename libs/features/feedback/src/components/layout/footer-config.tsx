import { BasicInfo } from "@patronage-web/shared";

import { LanguageButton } from "../language-button";
import { footerStartSectionStyles } from "./style";

export const footerConfig = {
  start: {
    elements: [<LanguageButton />],
    customStyles: footerStartSectionStyles
  },
  end: {
    elements: [<BasicInfo />]
  }
};
