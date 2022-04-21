/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { GoogleLogin } from "@patronage-web/site";
import { ComponentMeta } from "@storybook/react";

export const LoginStory: React.FC = () => <GoogleLogin />;

export default {
  title: "Login",
  component: LoginStory
} as ComponentMeta<typeof LoginStory>;
