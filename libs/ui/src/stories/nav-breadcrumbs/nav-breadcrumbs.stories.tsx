import { NavBreadcrumbs } from "@patronage-web/features-feedback";
import { ComponentMeta } from "@storybook/react";

export const NavBreadcrumbsStory = ({ presentationName }: { presentationName: string }) => (
  <NavBreadcrumbs presentationName={presentationName} />
);

export default {
  title: "Breadcrumbs",
  component: NavBreadcrumbsStory,
  args: {
    presentationName: "Presentation name"
  }
} as ComponentMeta<typeof NavBreadcrumbsStory>;
