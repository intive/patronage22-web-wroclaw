import { Typography } from "@mui/material";
import { footerConfig, navbarCenterSectionStyles } from "@patronage-web/features-feedback";
import { Layout as BasicLayout, LayoutProps, SearchBar, ThemeSelector } from "@patronage-web/shared";
import { authSelector } from "@patronage-web/shared-data";
import { useSelector } from "react-redux";

export const startNavbarSectionStyles = {
  "@media (max-width: 600px)": {
    marginLeft: "8px"
  }
};

export const Layout: React.FC = ({ children }) => {
  const { userLogin } = useSelector(authSelector);

  const navbarConfig: LayoutProps["navbarConfig"] = {
    start: {
      elements: [<Typography>Patronage 2022</Typography>],
      customStyles: startNavbarSectionStyles
    },
    end: {
      elements: [<ThemeSelector />]
    }
  };

  if (userLogin) {
    navbarConfig.center = {
      elements: [<SearchBar />],
      customStyles: navbarCenterSectionStyles
    };
  }

  return (
    <BasicLayout navbarConfig={navbarConfig} footerConfig={footerConfig}>
      {children}
    </BasicLayout>
  );
};
