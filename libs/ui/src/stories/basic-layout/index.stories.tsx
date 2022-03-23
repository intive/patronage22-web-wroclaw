import { footerConfig as feedbackFooterConfig, navbarConfig as feedbackNavbarConfig } from "@patronage-web/features-feedback";
import { Layout } from "@patronage-web/shared";
import { ComponentMeta } from "@storybook/react";

export const BasicLayoutStory: typeof Layout = ({ children, navbarConfig, footerConfig }) => (
  <Layout navbarConfig={navbarConfig} footerConfig={footerConfig}>
    {children}
  </Layout>
);

export default {
  title: "BasicLayout",
  component: BasicLayoutStory,
  argTypes: {
    children: {
      // TODO replace with any web page component when will be ready
      defaultValue: (
        <div style={{ height: "150vh", display: "flex", justifyContent: "center", alignItems: "center" }}>Sample Component</div>
      )
    },
    navbarConfig: {
      defaultValue: feedbackNavbarConfig
    },
    footerConfig: {
      defaultValue: feedbackFooterConfig
    }
  }
} as ComponentMeta<typeof BasicLayoutStory>;
