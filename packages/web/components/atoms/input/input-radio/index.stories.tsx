import React from 'react';
import { Story, Meta } from '@storybook/react';
import { RadioInput, RadioInputProps } from '.';

export default {
  title: 'Atoms/Input',
  component: RadioInput,
} as Meta;

const InputStory: Story<RadioInputProps> = (args) => <RadioInput {...args} />;

export const Radio = InputStory.bind({});
Radio.args = {
  title: 'Radio Title',
  subtitle: 'Radio Subtitle',
  selected: false,
  onSelect: () => alert('on select'),
};
