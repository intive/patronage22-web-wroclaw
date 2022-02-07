import { NavBreadcrumbs } from "@patronage-web/features-feedback";
import { ComponentMeta } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";

export const NavBreadcrumbsStory = ({ presentationName }: { presentationName: string }) => (
  <BrowserRouter>
    <NavBreadcrumbs presentationName={presentationName} />
  </BrowserRouter>
);

export default {
  title: "Breadcrumbs",
  component: NavBreadcrumbsStory,
  args: {
    presentationName: "Presentation name"
  }
} as ComponentMeta<typeof NavBreadcrumbsStory>;
