import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import { css } from 'styled-components';
import { Box } from 'atoms';
import { CustomButton, CustomProps } from 'molecules/Button';

export default {
  title: 'Design Systems/Button/Cookie',
  component: CustomButton,
  argTypes: { onPress: { action: 'clicked' } },
};

const ButtonTemplate: Story<CustomProps> = (args) => {
  const extend = {
    wrapper: css`
      width: 200px;
    `,
  };
  return (
    <Box styles={extend.wrapper}>
      <CustomButton type='cookie' {...args} />
    </Box>
  );
};

export const base = ButtonTemplate.bind({});
base.args = { name: 'Save Settings' };

export const inverse = ButtonTemplate.bind({});
inverse.args = { inverse: true, name: 'Cookie Preferences' };
