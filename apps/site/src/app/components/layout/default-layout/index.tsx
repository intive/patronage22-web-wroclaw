import { BasicInfo, Layout as BasicLayout } from "@patronage-web/shared";

import { AppName } from "../../app-name";

export const elementStyles = {
  margin: "auto",

  "@media (min-width: 600px)": {
    margin: "unset"
  }
};

export const navbarConfig = {
  start: {
    elements: [<AppName />],
    customStyles: elementStyles
  }
};

export const footerConfig = {
  end: {
    elements: [<BasicInfo />],
    customStyles: elementStyles
  }
};

export const Layout: React.FC = ({ children }) => {
  return (
    <BasicLayout navbarConfig={navbarConfig} footerConfig={footerConfig}>
      {children}
    </BasicLayout>
  );
};
