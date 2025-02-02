import React from "react";
import { Story, Meta } from "@storybook/react";
import {
  SignupPrototypeTemplate,
  SignupPrototypeTemplateProps,
} from "./template";

export default {
  title: "Organisms/Modal/Auth",
  component: SignupPrototypeTemplate,
} as Meta;

const SignupPrototypeStory: Story<SignupPrototypeTemplateProps> = (args) => (
  <SignupPrototypeTemplate {...args} />
);

export const Signup = SignupPrototypeStory.bind({});
Signup.args = {};
