import React from 'react';
import { Story, Meta } from '@storybook/react';
import { AllTemplate, AllTemplateProps } from './template';
import * as mockData from './mock';

export default {
  title: 'Templates/Host/Homes',
  component: AllTemplate,
} as Meta;

const TemplateStory: Story<AllTemplateProps> = (args) => (
  <AllTemplate {...args} />
);

export const All = TemplateStory.bind({});
All.args = {
  ...mockData,
};
