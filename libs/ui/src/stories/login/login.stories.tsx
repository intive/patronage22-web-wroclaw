import { Login } from "@patronage-web/shared";
import { ComponentMeta } from "@storybook/react";

export const LoginStory: React.FC = () => <Login />;

export default {
  title: "Login",
  component: LoginStory
} as ComponentMeta<typeof LoginStory>;
