import { BasicInfo, LanguageButton } from "@patronage-web/shared";

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
