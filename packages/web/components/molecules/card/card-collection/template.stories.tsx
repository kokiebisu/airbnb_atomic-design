import { Meta, Story } from '@storybook/react';
import {
  CollectionCardTemplate,
  CollectionCardTemplateProps,
} from './template';

export default {
  title: 'Design System/Molecules/Card',
  component: CollectionCardTemplate,
} as Meta;

const CardStory: Story<CollectionCardTemplateProps> = (args) => (
  <CollectionCardTemplate {...args} />
);

export const Collection = CardStory.bind({});
Collection.args = {
  title: 'Title',
};
