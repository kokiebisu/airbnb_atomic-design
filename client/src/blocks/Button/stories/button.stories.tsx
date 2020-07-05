import React from 'react';

// Component
import { BaseButton } from '../button';

import { action } from '@storybook/addon-actions';

export default {
  component: BaseButton,
  title: 'Base',
  excludeStories: /.*Data$/,
};

const buttonData = {
  children: 'click me',
};

const actionsData = {
  onPress: action('onPress'),
};

export const Base = () => {
  return <BaseButton {...buttonData} {...actionsData} />;
};
