import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Template, TemplateProps } from "@template/experiences/id";

export default {
  title: "Templates/Experiences/ID",
  component: Template,
  argTypes: {
    onClick: { action: "clicked" },
    type: { control: { disable: true } },
    extendsTo: { control: { disable: true } },
  },
} as Meta;

const TemplateStory: Story<TemplateProps> = (args) => <Template {...args} />;

export const Experiences = TemplateStory.bind({});
Experiences.args = {
  variant: "experiences",
};

export const Participate = TemplateStory.bind({});
Participate.args = {
  variant: "participate",
};

export const Bring = TemplateStory.bind({});
Bring.args = {
  variant: "bring",
};

export const Characteristics = TemplateStory.bind({});
Characteristics.args = {
  variant: "characteristics",
};

export const Available = TemplateStory.bind({});
Available.args = {
  variant: "available",
};

export const Preview = TemplateStory.bind({});
Preview.args = {
  variant: "preview",
};

export const Description = TemplateStory.bind({});
Description.args = {
  variant: "description",
};

export const Host = TemplateStory.bind({});
Host.args = {
  variant: "host",
};

export const Know = TemplateStory.bind({});
Know.args = {
  variant: "know",
};

export const Reviews = TemplateStory.bind({});
Reviews.args = {
  variant: "reviews",
};
