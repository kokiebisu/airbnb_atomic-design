import { Meta, Story } from "@storybook/react";
import {
  CollectionCardTemplate,
  CollectionCardTemplateProps,
} from "./template";

export default {
  title: "Molecules/Card",
  component: CollectionCardTemplate,
} as Meta;

const CardStory: Story<CollectionCardTemplateProps> = (args) => (
  <CollectionCardTemplate {...args} />
);

export const Collection = CardStory.bind({});
Collection.args = {
  // title: 'Title',
};
Collection.decorators = [
  (Story) => (
    <div style={{ maxWidth: 550 }}>
      <Story />
    </div>
  ),
];
